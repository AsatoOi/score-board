import React, { useState, useEffect } from "react";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  const handleStopWatch = () => {
    setRunning((PrevState) => !PrevState);
  };

  return (
    <div className="stopwatch">
      <h2>StopWatch</h2>
      <div className="stopwatch-time">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        <button onClick={handleStopWatch}>{running ? "Stop" : "Start"}</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};
