import { Fragment, useEffect, useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  useEffect(() => {
    if (timerExpired && dialog.current) {
      dialog.current.open();
    }
  }, [timerExpired]);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <Fragment>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result={"lost"} />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} secod{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {/* Time is running... / Timer inactive */}
          {timerStarted ? "Timer is running" : "Timer Inactive"}
        </p>
      </section>
    </Fragment>
  );
}
