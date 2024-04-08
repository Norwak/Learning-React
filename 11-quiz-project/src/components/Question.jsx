import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import questions from "../questions";

export default function Question({index, onSelectEvent, onSkipEvent}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: '',
  });

  let time = 250;
  if (answer.selectedAnswer) {
    time = 1000;
  }
  if (answer.isCorrect !== '') {
    time = 2000;
  }

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
      <QuestionTimer key={time}
        time={time}
        onTimeout={answer.selectedAnswer === '' ? onSkipEvent : null}
        mode={answerState}
      />
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