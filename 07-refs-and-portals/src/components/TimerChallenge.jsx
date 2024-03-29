import { useRef, useState } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  function startTimer() {
    const invervalMS = 10;
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - invervalMS);
    }, invervalMS);
  }

  function stopTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} resetEvent={resetTimer} />
      <li className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? stopTimer : startTimer}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </li>
    </>
  );
}