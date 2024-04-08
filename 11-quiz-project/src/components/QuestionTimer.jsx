import { useEffect, useState } from "react";

export default function QuestionTimer({time, onTimeout, mode}) {
  const [remainingTime, setRemainingTime] = useState(time);
  
  useEffect(() => {
    const timeout = setTimeout(onTimeout, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1000/60);
    }, 1000/60);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" className={mode} max={time} value={remainingTime} />
  );
}