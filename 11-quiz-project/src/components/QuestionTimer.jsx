import { useEffect, useState } from "react";

export default function QuestionTimer({time, onTimeout}) {
  const [remainingTime, setRemainingTime] = useState(time);
  
  useEffect(() => {
    const timeout = setTimeout(onTimeout, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={time} value={remainingTime} />
  );
}