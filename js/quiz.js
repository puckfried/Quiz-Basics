export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function topicQueue(questions, seenIds, random) {
  const unseen = shuffle(questions.filter((question) => !seenIds.has(question.id)), random);
  const seen = shuffle(questions.filter((question) => seenIds.has(question.id)), random);
  return [...unseen, ...seen];
}

function selectRoundRobin(questionSets, amount, seenIds, random, predicate = () => true) {
  if (amount <= 0) return [];
  const queues = new Map(
    questionSets
      .map((set) => [set.topic.id, topicQueue(set.questions.filter(predicate), seenIds, random)])
      .filter(([, questions]) => questions.length),
  );
  const selected = [];
  let activeTopics = shuffle([...queues.keys()], random);

  while (selected.length < amount && activeTopics.length > 0) {
    const nextTopics = [];
    for (const topicId of shuffle(activeTopics, random)) {
      if (selected.length >= amount) break;
      const question = queues.get(topicId).shift();
      if (question) selected.push({ ...question, topicId });
      if (queues.get(topicId).length > 0) nextTopics.push(topicId);
    }
    activeTopics = nextTopics;
  }

  return selected;
}

export function selectBalancedQuestions(questionSets, amount, seen = [], random = Math.random) {
  const seenIds = new Set(seen);
  const availableTerminal = questionSets.reduce(
    (count, set) => count + set.questions.filter((question) => question.type === "terminal").length,
    0,
  );
  const terminalAmount = availableTerminal ? Math.min(availableTerminal, Math.max(1, Math.floor(amount / 3))) : 0;
  const terminalQuestions = selectRoundRobin(
    questionSets, terminalAmount, seenIds, random, (question) => question.type === "terminal",
  );
  const regularQuestions = selectRoundRobin(
    questionSets, amount - terminalQuestions.length, seenIds, random, (question) => question.type !== "terminal",
  );
  const selectedIds = new Set([...terminalQuestions, ...regularQuestions].map((question) => question.id));
  const missing = amount - terminalQuestions.length - regularQuestions.length;
  const fallback = missing > 0
    ? selectRoundRobin(questionSets, missing, seenIds, random, (question) => !selectedIds.has(question.id))
    : [];
  return shuffle([...terminalQuestions, ...regularQuestions, ...fallback], random);
}

export function isCorrectAnswer(question, selectedAnswers) {
  const expected = [...question.correctAnswers].sort();
  const received = [...selectedAnswers].sort();
  return expected.length === received.length && expected.every((answer, index) => answer === received[index]);
}

export function calculateTopicResults(answers) {
  return answers.reduce((results, answer) => {
    const current = results.get(answer.question.topicId) ?? { correct: 0, total: 0 };
    current.total += 1;
    if (answer.isCorrect) current.correct += 1;
    results.set(answer.question.topicId, current);
    return results;
  }, new Map());
}
