import { useCallback, useState } from "react";
import questions from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question";

export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  let [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const isQuizOver = activeQuestionIndex === questions.length;



  const selectAnswer = useCallback(function selectAnswer(answer) {
    setAnswerState('answered');

    userAnswers = structuredClone(userAnswers);
    userAnswers.push(answer);
    setUserAnswers(userAnswers);

    setTimeout(() => {
      if (answer === questions[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(() => {
        setAnswerState('');
      }, 2000);
    }, 1000);
  }, [activeQuestionIndex]);

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
        questionText={currentQuestion.text}
        answers={currentQuestion.answers}
        onSelectEvent={selectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipEvent={skipAnswer}
      />
    </div>
  );
}