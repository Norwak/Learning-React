import { useState } from "react";
import questions from "../questions";
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  let [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);
  userAnswers = structuredClone(userAnswers);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === questions.length;



  function selectAnswer(answer) {
    userAnswers.push(answer);
    setUserAnswers(userAnswers);
  }



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