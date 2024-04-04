import { useState } from "react";
import questions from "../questions";

export default function Quiz() {
  let [userAnswers, setUserAnswers] = useState([]);

  userAnswers = structuredClone(userAnswers);

  const activeQuestionIndex = userAnswers.length;
  console.log(activeQuestionIndex);
  const currentQuestion = questions[activeQuestionIndex];

  function selectAnswer(selectedAnswer) {
    setUserAnswers(userAnswers.push(selectedAnswer));
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {currentQuestion.answers.map(answer => (
            <li key={answer} className="answer">
              <button type="button" onClick={() => selectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}