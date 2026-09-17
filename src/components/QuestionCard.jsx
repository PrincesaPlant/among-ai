import { useState } from 'react';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}) {
  const [selected, setSelected] = useState(null);

  function handleSelect(key) {
    setSelected(key);
    setTimeout(() => {
      onAnswer(key);
      setSelected(null);
    }, 350);
  }

  return (
    <div className="question-card">
      <div className="question-meta">
        Pergunta {questionNumber} de {totalQuestions}
      </div>
      <h3 className="question-text">{question.text}</h3>

      <div className="options-list">
        {question.options.map((opt) => (
          <button
            key={opt.key}
            className={`option-btn ${selected === opt.key ? 'selected' : ''}`}
            onClick={() => handleSelect(opt.key)}
            disabled={selected !== null}
          >
            <span className="option-key">{opt.key}</span>
            <span className="option-text">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
