import { useRef, useState } from "react";

export default function Workout({ title, description, time, onComplete }) {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStartWorkout() {
    setTimerStarted(true)
    timer.current = setTimeout(() => {
      setTimerExpired;
    }, time);
  }

  function handleStopWorkout() {
    clearTimeout(timer.current)
    onComplete();
  }

  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
