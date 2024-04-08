import { useRef } from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelectEvent}) {
  let shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = structuredClone(answers).sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map(answer => {
        const isSelectedAnswer = selectedAnswer === answer;

        let cssClasses = '';
        if (answerState === 'answered' && isSelectedAnswer) {
          cssClasses = 'selected';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelectedAnswer) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button type="button" className={cssClasses} onClick={() => onSelectEvent(answer)} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        )
      })}
    </ul>
  );
}