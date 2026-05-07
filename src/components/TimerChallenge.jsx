import { Fragment,useState,useRef } from "react";
// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const timer = useRef();
  function handleStart() {
     timer.current=setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000)

    setTimerStarted(true);

  }
  function handleStop() {
    clearTimeout(timer.current);
  }



  return (
    <Fragment>
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired&&<p>You Lost!</p>}
        <p className="challenge-time">
            {targetTime} secod{targetTime>1?'s':''}
        </p>
        <p>
          <button onClick={timerStarted?handleStop:handleStart}>
            {timerStarted?'Stop':'Start'} Challenge
          </button>
        </p>
        <p className={timerStarted?'active':undefined}>
          {/* Time is running... / Timer inactive */}
          {timerStarted?'Timer is running' : 'Timer Inactive'}
        </p>
      </section>
    </Fragment>
  );
}
