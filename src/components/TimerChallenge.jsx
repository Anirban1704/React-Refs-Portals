import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining < 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStartTimer() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStopTimer() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {parseInt(timeRemaining / 1000)} second
          {timeRemaining / 1000 > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timeActive ? handleStartTimer : handleStopTimer}>
            {timeActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeActive ? "active" : ""}>Timmer is running...</p>
      </section>
    </>
  );
}
