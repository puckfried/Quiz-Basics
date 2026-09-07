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

export function selectBalancedQuestions(questionSets, amount, seen = [], random = Math.random) {
  const seenIds = new Set(seen);
  const queues = new Map(
    questionSets.map((set) => [set.topic.id, topicQueue(set.questions, seenIds, random)]),
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

  return shuffle(selected, random);
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
