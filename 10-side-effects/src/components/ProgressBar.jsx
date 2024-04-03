import { useEffect, useState } from "react";

export default function ProgressBar({timerTime}) {
  const [remainingTime, setRemainingTime] = useState(timerTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (<progress value={remainingTime} max={timerTime} />);
}