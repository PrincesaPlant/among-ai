import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import PhaseIntro from './components/PhaseIntro';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultScreen from './components/ResultScreen';
import LoadingSubmit from './components/LoadingSubmit';
import Crewmate from './components/Crewmate';
import SpaceScene from './components/SpaceScene';
import { questions, phases } from './data/questions';
import { calculateResult } from './utils/calculateArchetype';
import { archetypes } from './data/archetypes';
import { submitToSheet } from './utils/submitToSheet';
import { crewmateColors } from './data/crewmateColors';

const STAGES = {
  INTRO: 'INTRO',
  PHASE_INTRO: 'PHASE_INTRO',
  QUESTION: 'QUESTION',
  SUBMITTING: 'SUBMITTING',
  RESULT: 'RESULT',
};

export default function App() {
  const [stage, setStage] = useState(STAGES.INTRO);
  const [user, setUser] = useState(null);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const currentPhase = phases[currentPhaseIndex];
  const questionsInPhase = questions.filter((q) => q.phase === currentPhase.id);
  const currentQuestion = questionsInPhase[currentQuestionIndex];
  const currentColor = crewmateColors[currentPhase.id] || 'red';

  const totalAnswered = answers.length;
  const totalQuestions = questions.length;
  const progress = totalQuestions > 0 ? totalAnswered / totalQuestions : 0;

  function handleStart(userData) {
    setUser(userData);
    setStage(STAGES.PHASE_INTRO);
  }

  function handlePhaseContinue() {
    setStage(STAGES.QUESTION);
  }

  async function handleAnswer(selectedKey) {
    const newAnswers = [
      ...answers,
      { questionId: currentQuestion.id, selectedKey },
    ];
    setAnswers(newAnswers);

    const isLastQuestionInPhase =
      currentQuestionIndex + 1 >= questionsInPhase.length;
    const isLastPhase = currentPhaseIndex + 1 >= phases.length;

    if (isLastQuestionInPhase && isLastPhase) {
      setStage(STAGES.SUBMITTING);
      const finalResult = calculateResult(newAnswers, questions);
      setResult(finalResult);

      await submitToSheet({
        name: user.name,
        email: user.email,
        answers: newAnswers,
        counts: finalResult.counts,
        winningCode: finalResult.winningCode,
        winningName: archetypes[finalResult.winningCode].name,
      });

      setStage(STAGES.RESULT);
    } else if (isLastQuestionInPhase) {
      setCurrentPhaseIndex(currentPhaseIndex + 1);
      setCurrentQuestionIndex(0);
      setStage(STAGES.PHASE_INTRO);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const showWalkingCrewmates = stage !== STAGES.RESULT;

  return (
    <div className="app-container">
      <SpaceScene progress={progress} />

      {showWalkingCrewmates && (
        <>
          <div className="walking-crewmate walking-crewmate-1">
            <Crewmate color="cyan" size={60} pose="walk" />
          </div>
          <div className="walking-crewmate walking-crewmate-2">
            <Crewmate color="yellow" size={50} pose="walk" />
          </div>
          <div className="walking-crewmate walking-crewmate-3">
            <Crewmate color="green" size={55} pose="walk" />
          </div>
        </>
      )}

      {stage === STAGES.INTRO && <IntroScreen onStart={handleStart} />}

      {stage === STAGES.PHASE_INTRO && (
        <PhaseIntro
          phase={currentPhase}
          color={currentColor}
          onContinue={handlePhaseContinue}
        />
      )}

      {stage === STAGES.QUESTION && (
        <div className="game-screen">
          <ProgressBar current={totalAnswered} total={totalQuestions} />
          <QuestionCard
            question={currentQuestion}
            questionNumber={totalAnswered + 1}
            totalQuestions={totalQuestions}
            onAnswer={handleAnswer}
          />
        </div>
      )}

      {stage === STAGES.SUBMITTING && <LoadingSubmit />}

      {stage === STAGES.RESULT && (
        <ResultScreen winningCode={result.winningCode} userName={user.name} />
      )}
    </div>
  );
}
