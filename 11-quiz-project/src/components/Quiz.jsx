import { useCallback, useState } from "react";
import questions from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question";

export default function Quiz() {
  let [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === questions.length;



  const selectAnswer = useCallback(function selectAnswer(answer) {
    userAnswers = structuredClone(userAnswers);
    userAnswers.push(answer);
    setUserAnswers(userAnswers);
  }, []);

  const skipAnswer = useCallback(() => selectAnswer(''), [selectAnswer]);



  if (isQuizOver) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }



  const currentQuestion = questions[activeQuestionIndex];

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectEvent={selectAnswer}
        onSkipEvent={skipAnswer}
      />
    </div>
  );
}