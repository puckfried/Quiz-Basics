import { evaluateTerminalGoals, formatTerminalEvent, normalizePath, TerminalSession, tokenizeCommand } from "../js/terminal-engine.js";
import { selectBalancedQuestions } from "../js/quiz.js";
import { buildCodeSolution, isCorrectCodeAnswer, normalizeCodeAnswer } from "../js/code-engine.js";
import { renderInlineCode } from "../js/inline-code.js";

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

test("code answers normalize line endings and outer whitespace", () => {
  equal(normalizeCodeAnswer("  display: flex;  \r\n"), "display: flex;", "normalised code");
});

test("code answers accept only configured variants", () => {
  const configuration = { prefix: "p { ", suffix: " }", acceptedAnswers: ["color: red;", "color: #ff0000;"] };
  assert(isCorrectCodeAnswer(configuration, " color: red; "), "configured answer rejected");
  assert(!isCorrectCodeAnswer(configuration, "colour: red;"), "invalid answer accepted");
  equal(buildCodeSolution(configuration), "p { color: red; }", "built solution");
});

test("paired backticks render as inline code", () => {
  const element = document.createElement("p");
  renderInlineCode(element, "Use `input()` and `int()`.");
  equal([...element.querySelectorAll("code.inline-code")].map((code) => code.textContent), ["input()", "int()"], "inline code spans");
  equal(element.textContent, "Use input() and int().", "visible text");
});

test("unmatched backticks remain visible", () => {
  const element = document.createElement("p");
  renderInlineCode(element, "Use `input().");
  equal(element.querySelectorAll("code").length, 0, "unexpected code span");
  equal(element.textContent, "Use `input().", "literal fallback");
});

test("inline code never interprets source text as HTML", () => {
  const element = document.createElement("p");
  const source = "Use `<img src=x onerror=alert(1)>`.";
  renderInlineCode(element, source);
  equal(element.querySelectorAll("img").length, 0, "HTML element was created");
  equal(element.querySelector("code")?.textContent, "<img src=x onerror=alert(1)>", "escaped code text");
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

const mixedSets = [
  { topic: { id: "bash" }, questions: Array.from({ length: 6 }, (_, index) => ({ id: `mixed-terminal-${index}`, type: "terminal" })) },
  { topic: { id: "html" }, questions: Array.from({ length: 6 }, (_, index) => ({ id: `mixed-code-${index}`, type: "code" })) },
  { topic: { id: "knowledge" }, questions: Array.from({ length: 12 }, (_, index) => ({ id: `mixed-mc-${index}`, type: "single" })) },
];

test("terminal and code tasks share the interactive quota", () => {
  const selected = selectBalancedQuestions(mixedSets, 12, [], () => 0.42);
  equal(selected.filter((question) => ["terminal", "code"].includes(question.type)).length, 4, "interactive count");
  assert(selected.some((question) => question.type === "terminal"), "terminal task missing");
  assert(selected.some((question) => question.type === "code"), "code task missing");
});

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

const codeDataFiles = [
  "../questions/09-html.json",
  "../questions/10-css.json",
  "../questions/11-python-grundlagen.json",
  "../questions/12-python-kontrollfluss.json",
  "../questions/13-python-datenstrukturen.json",
  "../questions/14-python-dateien-fehler.json",
];
for (const file of codeDataFiles) {
  const data = await fetch(file).then((response) => response.json());
  for (const question of data.questions.filter((item) => item.type === "code")) {
    test(`${question.id} accepts its primary solution`, () => {
      assert(isCorrectCodeAnswer(question.code, question.code.acceptedAnswers[0]), "primary solution was rejected");
      equal(
        buildCodeSolution(question.code),
        `${question.code.prefix}${question.code.acceptedAnswers[0]}${question.code.suffix}`,
        "completed snippet",
      );
    });
  }
}

document.getElementById("results").textContent = `${messages.join("\n")}\n\n${failures ? `${failures} TESTS FAILED` : "ALL TESTS PASSED"}`;
document.title = failures ? `FAIL ${failures}` : "PASS";
document.body.dataset.testStatus = failures ? "failed" : "passed";
