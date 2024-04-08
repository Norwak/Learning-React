import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import questions from "../questions";

export default function Question({index, onSelectEvent, onSkipEvent}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: '',
  });

  function selectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: ''
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questions[index].answers[0] === answer ? 'correct' : 'wrong',
      });

      setTimeout(() => {
        onSelectEvent(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== '') {
    answerState = answer.isCorrect;
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer time={5000} onTimeout={onSkipEvent} />
      <h2>{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectEvent={selectAnswer}
      />
    </div>
  );
}