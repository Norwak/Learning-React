import { useCallback, useState } from "react";
import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
      <Summary userAnswers={userAnswers} />
    );
  }



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