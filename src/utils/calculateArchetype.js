import { getWinningArchetype } from '../data/archetypes';

export function calculateResult(answers, questions) {
  const counts = { EXP: 0, CON: 0, EST: 0, MUL: 0 };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    const option = question.options.find((o) => o.key === answer.selectedKey);
    counts[option.archetype] += 1;
  });

  const winningCode = getWinningArchetype(counts);

  return { counts, winningCode };
}
