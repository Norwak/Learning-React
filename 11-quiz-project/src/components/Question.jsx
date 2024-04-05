import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({questionText, answers, onSelectEvent, selectedAnswer, answerState, onSkipEvent}) {
  return (
    <div id="question">
      <QuestionTimer time={10000} onTimeout={onSkipEvent} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelectEvent={onSelectEvent}
      />
    </div>
  );
}