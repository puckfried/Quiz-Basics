import { evaluateTerminalGoals, formatTerminalEvent, normalizePath, TerminalSession, tokenizeCommand } from "../js/terminal-engine.js";
import { selectBalancedQuestions } from "../js/quiz.js";

const messages = [];
let failures = 0;

function test(name, callback) {
  try { callback(); messages.push(`PASS ${name}`); }
  catch (error) { failures += 1; messages.push(`FAIL ${name}\n  ${error.message}`); }
}

function assert(value, message) { if (!value) throw new Error(message); }
function equal(actual, expected, message) { assert(JSON.stringify(actual) === JSON.stringify(expected), `${message}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`); }

test("tokenizer keeps quoted values together", () => {
  equal(tokenizeCommand('git commit -m "Add starter docs"').tokens, ["git", "commit", "-m", "Add starter docs"], "quoted command");
});

test("tokenizer rejects shell operators", () => {
  equal(tokenizeCommand("cat notes.txt | less").error, "unsupportedSyntax", "pipe rejection");
  equal(tokenizeCommand("touch unsafe > file").error, "unsupportedSyntax", "redirection rejection");
});

test("path normalization handles home and parents", () => {
  equal(normalizePath("/home/learner/work/docs", "../notes"), "/home/learner/work/notes", "parent path");
  equal(normalizePath("/tmp", "~/project"), "/home/learner/project", "home path");
});

test("filesystem commands mutate only virtual state", () => {
  const session = new TerminalSession({ cwd: "/home/learner", filesystem: [] });
  assert(session.execute("mkdir -p work/inbox work/outbox").ok, "mkdir failed");
  assert(session.execute("touch work/inbox/mail.txt").ok, "touch failed");
  assert(session.execute("mv work/inbox/mail.txt work/outbox/").ok, "mv failed");
  assert(evaluateTerminalGoals(session, [
    { type: "pathAbsent", path: "/home/learner/work/inbox/mail.txt" },
    { type: "pathExists", path: "/home/learner/work/outbox/mail.txt", entryType: "file" },
  ]).complete, "filesystem goal not reached");
});

test("git workflow creates a commit", () => {
  const session = new TerminalSession({ cwd: "/home/learner/project", filesystem: [
    { path: "/home/learner/project", type: "directory" }, { path: "README.md", type: "file", content: "Hi" },
  ], git: { globalConfig: { "user.name": "Alex", "user.email": "alex@example.com" } } });
  for (const command of ["git init", "git add .", 'git commit -m "Add README"']) assert(session.execute(command).ok, `${command} failed`);
  assert(evaluateTerminalGoals(session, [{ type: "gitCommitExists", message: "Add README", paths: ["README.md"] }]).complete, "commit goal not reached");
});

test("terminal messages localize", () => {
  const session = new TerminalSession();
  const output = session.execute("unknown-command");
  assert(formatTerminalEvent(output.events[0], "de").includes("nicht gefunden"), "German message missing");
  assert(formatTerminalEvent(output.events[0], "en").includes("not found"), "English message missing");
});

const questionSets = ["bash", "git"].map((topicId) => ({
  topic: { id: topicId },
  questions: [
    ...Array.from({ length: 12 }, (_, index) => ({ id: `${topicId}-mc-${index}`, type: "single" })),
    ...Array.from({ length: 6 }, (_, index) => ({ id: `${topicId}-terminal-${index}`, type: "terminal" })),
  ],
}));

for (const [amount, expected] of [[5, 1], [10, 3], [15, 5], [20, 6]]) {
  test(`selection includes ${expected} terminal tasks in a ${amount}-question round`, () => {
    const selected = selectBalancedQuestions(questionSets, amount, [], () => 0.42);
    equal(selected.length, amount, "question count");
    equal(selected.filter((question) => question.type === "terminal").length, expected, "terminal count");
  });
}

const dataFiles = ["../questions/06-linux-terminal.json", "../questions/08-git.json"];
for (const file of dataFiles) {
  const data = await fetch(file).then((response) => response.json());
  for (const question of data.questions.filter((item) => item.type === "terminal")) {
    test(`${question.id} reaches its goal with the example solution`, () => {
      const session = new TerminalSession(question.terminal);
      for (const command of question.terminal.solution) assert(session.execute(command).ok, `${command} returned an error`);
      assert(evaluateTerminalGoals(session, question.terminal.goals).complete, "target state was not reached");
    });
  }
}

document.getElementById("results").textContent = `${messages.join("\n")}\n\n${failures ? `${failures} TESTS FAILED` : "ALL TESTS PASSED"}`;
document.title = failures ? `FAIL ${failures}` : "PASS";
document.body.dataset.testStatus = failures ? "failed" : "passed";
