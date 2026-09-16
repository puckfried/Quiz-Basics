export function normalizeCodeAnswer(value) {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n")
    .trim();
}

export function isCorrectCodeAnswer(configuration, value) {
  const received = normalizeCodeAnswer(value);
  return configuration.acceptedAnswers.some((answer) => normalizeCodeAnswer(answer) === received);
}

export function buildCodeSolution(configuration) {
  return `${configuration.prefix}${configuration.acceptedAnswers[0]}${configuration.suffix}`;
}
