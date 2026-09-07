import { translations, localize } from "./i18n.js";
import { calculateTopicResults, isCorrectAnswer, selectBalancedQuestions, shuffle } from "./quiz.js";
import { evaluateTerminalGoals, formatTerminalEvent, TerminalSession } from "./terminal-engine.js";

const STORAGE_KEYS = {
  language: "ctf-quiz-language",
  selection: "ctf-quiz-selection",
  history: "ctf-quiz-history",
};

const state = {
  language: localStorage.getItem(STORAGE_KEYS.language) || "de",
  catalog: [],
  selectedTopicIds: new Set(),
  questionSets: [],
  questions: [],
  answers: [],
  currentIndex: 0,
  currentAnswer: null,
  terminalSession: null,
  terminalQuestionId: null,
  terminalHintsShown: 0,
  terminalHistoryIndex: 0,
};

const elements = Object.fromEntries(
  [
    "setup-view", "quiz-view", "results-view", "topic-groups", "load-error", "select-all", "select-none",
    "selection-summary", "start-quiz", "quit-quiz", "progress-label", "score-label", "progress-bar",
    "question-topic", "question-difficulty", "question-heading", "question-instruction", "answer-form",
    "answer-options", "answer-error", "submit-answer", "feedback", "feedback-icon", "feedback-title",
    "feedback-explanation", "next-question", "result-percentage", "result-total", "result-message",
    "topic-result-list", "retry-wrong", "new-round", "reset-history", "topic-template",
    "terminal-panel", "terminal-output", "terminal-form", "terminal-prompt", "terminal-input",
    "terminal-hint", "terminal-reset", "terminal-solution", "terminal-hints", "feedback-solution",
  ].map((id) => [id, document.getElementById(id)]),
);

function t(key, params) {
  const value = translations[state.language][key];
  return typeof value === "function" ? value(params) : value;
}

function setLanguage(language) {
  state.language = language;
  document.documentElement.lang = language;
  document.title = language === "de" ? "Lernquiz – Computergrundlagen" : "Learning Quiz – Computer Fundamentals";
  localStorage.setItem(STORAGE_KEYS.language, language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (typeof value === "string") element.textContent = value;
  });
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderTopics();
  updateSelectionSummary();
  if (!elements["quiz-view"].hidden) renderQuestion({ preserveTerminalFocus: true });
  if (!elements["results-view"].hidden) renderResults();
}

function readStoredArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

async function loadCatalog() {
  const response = await fetch("questions/index.json", { cache: "no-store" });
  if (!response.ok) throw new Error(`Catalog request failed: ${response.status}`);
  const data = await response.json();
  state.catalog = data.topics;
  const storedSelection = readStoredArray(STORAGE_KEYS.selection);
  state.selectedTopicIds = new Set(
    storedSelection.length ? storedSelection.filter((id) => state.catalog.some((entry) => entry.topic.id === id)) : state.catalog.map((entry) => entry.topic.id),
  );
}

function groupCatalog() {
  return state.catalog.reduce((groups, entry) => {
    const group = localize(entry.topic.group, state.language);
    if (!groups.has(group)) groups.set(group, []);
    groups.get(group).push(entry);
    return groups;
  }, new Map());
}

function renderTopics() {
  if (!state.catalog.length) return;
  elements["topic-groups"].replaceChildren();

  for (const [groupName, entries] of groupCatalog()) {
    const section = document.createElement("section");
    section.className = "topic-group";
    const heading = document.createElement("h3");
    heading.className = "topic-group__heading";
    heading.textContent = groupName;
    const grid = document.createElement("div");
    grid.className = "topic-grid";

    entries.sort((a, b) => a.topic.order - b.topic.order).forEach((entry) => {
      const card = elements["topic-template"].content.cloneNode(true);
      const input = card.querySelector("input");
      input.value = entry.topic.id;
      input.checked = state.selectedTopicIds.has(entry.topic.id);
      input.addEventListener("change", handleTopicChange);
      card.querySelector(".topic-card__title").textContent = localize(entry.topic.title, state.language);
      card.querySelector(".topic-card__description").textContent = localize(entry.topic.description, state.language);
      card.querySelector(".topic-card__count").textContent = t("topicQuestionCount", entry.questionCount);
      grid.append(card);
    });

    section.append(heading, grid);
    elements["topic-groups"].append(section);
  }
}

function handleTopicChange(event) {
  if (event.target.checked) state.selectedTopicIds.add(event.target.value);
  else state.selectedTopicIds.delete(event.target.value);
  persistSelection();
  updateSelectionSummary();
}

function persistSelection() {
  localStorage.setItem(STORAGE_KEYS.selection, JSON.stringify([...state.selectedTopicIds]));
}

function setAllTopics(selected) {
  state.selectedTopicIds = new Set(selected ? state.catalog.map((entry) => entry.topic.id) : []);
  document.querySelectorAll(".topic-card__input").forEach((input) => { input.checked = selected; });
  persistSelection();
  updateSelectionSummary();
}

function updateSelectionSummary() {
  const selectedEntries = state.catalog.filter((entry) => state.selectedTopicIds.has(entry.topic.id));
  const availableQuestions = selectedEntries.reduce((sum, entry) => sum + entry.questionCount, 0);
  elements["selection-summary"].textContent = selectedEntries.length
    ? t("selectionSummary", { topics: selectedEntries.length, questions: availableQuestions })
    : t("selectionEmpty");
  elements["start-quiz"].disabled = selectedEntries.length === 0;
  document.querySelectorAll('input[name="amount"]').forEach((input) => {
    input.disabled = Number(input.value) > availableQuestions;
    if (input.checked && input.disabled) input.checked = false;
  });
  if (!document.querySelector('input[name="amount"]:checked')) {
    const available = [...document.querySelectorAll('input[name="amount"]:not(:disabled)')].at(-1);
    if (available) available.checked = true;
  }
}

function showView(name) {
  for (const view of ["setup-view", "quiz-view", "results-view"]) elements[view].hidden = view !== name;
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("main-content").focus({ preventScroll: true });
}

async function startQuiz() {
  elements["start-quiz"].disabled = true;
  elements["load-error"].hidden = true;
  try {
    const selectedEntries = state.catalog.filter((entry) => state.selectedTopicIds.has(entry.topic.id));
    state.questionSets = await Promise.all(selectedEntries.map(async (entry) => {
      const response = await fetch(`questions/${entry.file}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Question request failed: ${entry.file}`);
      return response.json();
    }));
    const amount = Number(document.querySelector('input[name="amount"]:checked').value);
    const history = readStoredArray(STORAGE_KEYS.history);
    state.questions = selectBalancedQuestions(state.questionSets, amount, history);
    beginQuestions();
  } catch (error) {
    console.error(error);
    elements["load-error"].textContent = t("topicLoadError");
    elements["load-error"].hidden = false;
  } finally {
    elements["start-quiz"].disabled = state.selectedTopicIds.size === 0;
  }
}

function beginQuestions() {
  state.answers = [];
  state.currentIndex = 0;
  state.currentAnswer = null;
  clearTerminalState();
  const history = new Set(readStoredArray(STORAGE_KEYS.history));
  state.questions.forEach((question) => history.add(question.id));
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify([...history]));
  showView("quiz-view");
  renderQuestion();
}

function currentQuestion() { return state.questions[state.currentIndex]; }
function currentTopic() { return state.questionSets.find((set) => set.topic.id === currentQuestion().topicId)?.topic; }

function clearTerminalState() {
  state.terminalSession = null;
  state.terminalQuestionId = null;
  state.terminalHintsShown = 0;
  state.terminalHistoryIndex = 0;
}

function renderQuestion({ preserveTerminalFocus = false } = {}) {
  const question = currentQuestion();
  if (!question) return;
  const topic = currentTopic();
  const terminalQuestion = question.type === "terminal";
  const correctCount = state.answers.filter((answer) => answer.isCorrect).length;
  elements["progress-label"].textContent = t("progress", { current: state.currentIndex + 1, total: state.questions.length });
  elements["score-label"].textContent = t("score", { correct: correctCount });
  elements["progress-bar"].style.width = `${((state.currentIndex + 1) / state.questions.length) * 100}%`;
  elements["question-topic"].textContent = localize(topic.title, state.language);
  elements["question-difficulty"].textContent = t("difficulty")[question.difficulty];
  elements["question-heading"].textContent = localize(terminalQuestion ? question.title : question.prompt, state.language);
  const instructionKey = question.type === "multiple" ? "instructionMultiple" : "instructionSingle";
  elements["question-instruction"].textContent = terminalQuestion
    ? localize(question.prompt, state.language)
    : t(instructionKey);
  elements["answer-error"].hidden = true;
  elements["answer-options"].replaceChildren();

  elements["answer-form"].hidden = terminalQuestion;
  elements["terminal-panel"].hidden = !terminalQuestion;
  if (terminalQuestion) {
    renderTerminalQuestion({ preserveFocus: preserveTerminalFocus });
    elements["submit-answer"].hidden = true;
    if (state.currentAnswer) renderFeedback();
    else elements.feedback.hidden = true;
    return;
  }

  const options = question._optionOrder ?? shuffle(question.answers);
  question._optionOrder = options;
  options.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    const input = document.createElement("input");
    input.type = question.type === "multiple" ? "checkbox" : "radio";
    input.name = "answer";
    input.value = answer.id;
    input.disabled = Boolean(state.currentAnswer);
    input.checked = state.currentAnswer?.selected.includes(answer.id) ?? false;
    const body = document.createElement("span");
    body.className = "answer-option__body";
    const letter = document.createElement("span");
    letter.className = "answer-option__letter";
    letter.textContent = String.fromCharCode(65 + index);
    const copy = document.createElement("span");
    copy.textContent = localize(answer.text ?? answer, state.language);
    body.append(letter, copy);
    label.append(input, body);
    if (state.currentAnswer) {
      if (question.correctAnswers.includes(answer.id)) label.classList.add("is-correct");
      else if (state.currentAnswer.selected.includes(answer.id)) label.classList.add("is-incorrect");
    }
    elements["answer-options"].append(label);
  });

  elements["submit-answer"].hidden = Boolean(state.currentAnswer);
  if (state.currentAnswer) renderFeedback();
  else elements.feedback.hidden = true;
}

function renderTerminalQuestion({ preserveFocus = false } = {}) {
  const question = currentQuestion();
  const hadFocus = document.activeElement === elements["terminal-input"];
  if (!state.terminalSession || state.terminalQuestionId !== question.id) {
    state.terminalSession = new TerminalSession(question.terminal);
    state.terminalQuestionId = question.id;
    state.terminalHintsShown = 0;
    state.terminalHistoryIndex = 0;
  }

  const session = state.terminalSession;
  elements["terminal-output"].replaceChildren();
  const welcome = document.createElement("p");
  welcome.className = "terminal-message terminal-message--muted";
  welcome.textContent = t("terminalWelcome");
  elements["terminal-output"].append(welcome);

  session.transcript.forEach((entry) => {
    const commandLine = document.createElement("div");
    commandLine.className = "terminal-transcript-command";
    const prompt = document.createElement("span");
    prompt.className = "terminal-transcript-prompt";
    prompt.textContent = entry.prompt;
    const command = document.createElement("span");
    command.textContent = entry.command;
    commandLine.append(prompt, document.createTextNode(" "), command);
    elements["terminal-output"].append(commandLine);
    entry.events.forEach((item) => {
      const output = document.createElement("pre");
      output.className = `terminal-message${item.tone === "error" ? " terminal-message--error" : ""}`;
      output.textContent = formatTerminalEvent(item, state.language);
      elements["terminal-output"].append(output);
    });
  });

  elements["terminal-prompt"].textContent = session.prompt();
  const locked = Boolean(state.currentAnswer);
  elements["terminal-input"].disabled = locked;
  elements["terminal-hint"].disabled = locked || state.terminalHintsShown >= question.terminal.hints.length;
  elements["terminal-reset"].disabled = locked;
  elements["terminal-solution"].disabled = locked;
  elements["terminal-hint"].textContent = state.terminalHintsShown === 0
    ? t("showHint")
    : state.terminalHintsShown < question.terminal.hints.length ? t("nextHint") : t("noMoreHints");
  renderTerminalHints();
  elements["terminal-output"].scrollTop = elements["terminal-output"].scrollHeight;
  if (!locked && (hadFocus || !preserveFocus)) elements["terminal-input"].focus({ preventScroll: true });
}

function renderTerminalHints() {
  const hints = currentQuestion().terminal.hints.slice(0, state.terminalHintsShown);
  elements["terminal-hints"].hidden = hints.length === 0;
  elements["terminal-hints"].replaceChildren();
  hints.forEach((hint, index) => {
    const paragraph = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = `${t("hintLabel", index + 1)}: `;
    paragraph.append(label, document.createTextNode(localize(hint, state.language)));
    elements["terminal-hints"].append(paragraph);
  });
}

function runTerminalCommand(event) {
  event.preventDefault();
  if (state.currentAnswer) return;
  const command = elements["terminal-input"].value;
  if (!command.trim()) return;
  const execution = state.terminalSession.execute(command);
  elements["terminal-input"].value = "";
  state.terminalHistoryIndex = state.terminalSession.commandHistory.length;
  renderTerminalQuestion({ preserveFocus: true });
  if (execution.ok && evaluateTerminalGoals(state.terminalSession, currentQuestion().terminal.goals).complete) {
    finishTerminalQuestion(true, false);
  }
}

function finishTerminalQuestion(isCorrect, solutionRevealed) {
  if (state.currentAnswer) return;
  const question = currentQuestion();
  state.currentAnswer = { selected: [], isCorrect, solutionRevealed };
  state.answers.push({ question, ...state.currentAnswer });
  renderQuestion({ preserveTerminalFocus: true });
  elements.feedback.focus();
}

function showTerminalHint() {
  const hints = currentQuestion().terminal.hints;
  if (state.terminalHintsShown < hints.length) state.terminalHintsShown += 1;
  renderTerminalQuestion({ preserveFocus: true });
}

function resetTerminal() {
  state.terminalSession = new TerminalSession(currentQuestion().terminal);
  state.terminalHistoryIndex = 0;
  renderTerminalQuestion();
}

function revealTerminalSolution() {
  finishTerminalQuestion(false, true);
}

function navigateTerminalHistory(event) {
  if (!state.terminalSession || !["ArrowUp", "ArrowDown"].includes(event.key)) return;
  const history = state.terminalSession.commandHistory;
  if (!history.length) return;
  event.preventDefault();
  if (event.key === "ArrowUp") state.terminalHistoryIndex = Math.max(0, state.terminalHistoryIndex - 1);
  else state.terminalHistoryIndex = Math.min(history.length, state.terminalHistoryIndex + 1);
  elements["terminal-input"].value = state.terminalHistoryIndex === history.length ? "" : history[state.terminalHistoryIndex];
  elements["terminal-input"].setSelectionRange(elements["terminal-input"].value.length, elements["terminal-input"].value.length);
}

function submitAnswer(event) {
  event.preventDefault();
  const selected = [...elements["answer-form"].querySelectorAll('input[name="answer"]:checked')].map((input) => input.value);
  if (!selected.length) {
    elements["answer-error"].textContent = t("answerRequired");
    elements["answer-error"].hidden = false;
    return;
  }
  const question = currentQuestion();
  state.currentAnswer = { selected, isCorrect: isCorrectAnswer(question, selected) };
  state.answers.push({ question, ...state.currentAnswer });
  renderQuestion();
  elements.feedback.focus();
}

function renderFeedback() {
  const { isCorrect } = state.currentAnswer;
  const terminalSolution = currentQuestion().type === "terminal" && state.currentAnswer.solutionRevealed;
  elements.feedback.hidden = false;
  elements.feedback.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  elements["feedback-icon"].textContent = isCorrect ? "✓" : terminalSolution ? "i" : "×";
  elements["feedback-title"].textContent = terminalSolution ? t("solutionTitle") : t(isCorrect ? "correctTitle" : "incorrectTitle");
  elements["feedback-explanation"].textContent = localize(currentQuestion().explanation, state.language);
  elements["feedback-solution"].hidden = !terminalSolution;
  elements["feedback-solution"].textContent = terminalSolution ? currentQuestion().terminal.solution.join("\n") : "";
  elements["next-question"].textContent = t(state.currentIndex === state.questions.length - 1 ? "showResults" : "nextQuestion");
}

function nextQuestion() {
  if (state.currentIndex === state.questions.length - 1) {
    showView("results-view");
    renderResults();
    return;
  }
  state.currentIndex += 1;
  state.currentAnswer = null;
  clearTerminalState();
  renderQuestion();
  elements["question-heading"].focus?.();
}

function renderResults() {
  if (!state.answers.length) return;
  const correct = state.answers.filter((answer) => answer.isCorrect).length;
  const percentage = Math.round((correct / state.answers.length) * 100);
  elements["result-percentage"].textContent = `${percentage}%`;
  elements["result-total"].textContent = t("resultTotal", { correct, total: state.answers.length });
  elements["result-message"].textContent = t(percentage >= 85 ? "resultExcellent" : percentage >= 60 ? "resultGood" : "resultPractice");
  elements["topic-result-list"].replaceChildren();

  for (const [topicId, result] of calculateTopicResults(state.answers)) {
    const topic = state.questionSets.find((set) => set.topic.id === topicId).topic;
    const row = document.createElement("div");
    row.className = "topic-result";
    const title = document.createElement("span");
    title.textContent = localize(topic.title, state.language);
    const score = document.createElement("strong");
    score.textContent = `${result.correct}/${result.total}`;
    const bar = document.createElement("div");
    bar.className = "topic-result__bar";
    const fill = document.createElement("span");
    fill.style.width = `${(result.correct / result.total) * 100}%`;
    bar.append(fill);
    row.append(title, score, bar);
    elements["topic-result-list"].append(row);
  }
  elements["retry-wrong"].disabled = state.answers.every((answer) => answer.isCorrect);
}

function retryWrongAnswers() {
  const wrong = state.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.question);
  if (!wrong.length) return;
  state.questions = shuffle(wrong);
  beginQuestions();
}

function resetToSetup() {
  state.questions = [];
  state.answers = [];
  state.currentAnswer = null;
  clearTerminalState();
  showView("setup-view");
}

function bindEvents() {
  document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  elements["select-all"].addEventListener("click", () => setAllTopics(true));
  elements["select-none"].addEventListener("click", () => setAllTopics(false));
  elements["start-quiz"].addEventListener("click", startQuiz);
  elements["quit-quiz"].addEventListener("click", resetToSetup);
  elements["answer-form"].addEventListener("submit", submitAnswer);
  elements["terminal-form"].addEventListener("submit", runTerminalCommand);
  elements["terminal-input"].addEventListener("keydown", navigateTerminalHistory);
  elements["terminal-hint"].addEventListener("click", showTerminalHint);
  elements["terminal-reset"].addEventListener("click", resetTerminal);
  elements["terminal-solution"].addEventListener("click", revealTerminalSolution);
  elements["next-question"].addEventListener("click", nextQuestion);
  elements["retry-wrong"].addEventListener("click", retryWrongAnswers);
  elements["new-round"].addEventListener("click", resetToSetup);
  elements["reset-history"].addEventListener("click", () => {
    if (window.confirm(t("resetConfirm"))) {
      localStorage.removeItem(STORAGE_KEYS.history);
      window.alert(t("historyReset"));
    }
  });
}

async function init() {
  bindEvents();
  setLanguage(state.language === "en" ? "en" : "de");
  try {
    await loadCatalog();
    renderTopics();
    updateSelectionSummary();
  } catch (error) {
    console.error(error);
    elements["topic-groups"].hidden = true;
    elements["load-error"].textContent = t("loadError");
    elements["load-error"].hidden = false;
  }
}

init();
