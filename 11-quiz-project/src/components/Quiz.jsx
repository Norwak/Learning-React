import { useCallback, useState } from "react";
import questions from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";

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
  const shuffledAnswers = structuredClone(currentQuestion.answers).sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} time={2000} onTimeout={skipAnswer} />
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map(answer => (
            <li key={answer} className="answer">
              <button type="button" onClick={() => selectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}