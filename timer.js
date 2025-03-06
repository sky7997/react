import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(Number(localStorage.getItem("time")) || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [task, setTask] = useState(localStorage.getItem("task") || "");

  useEffect(() => {
    localStorage.setItem("time", time);
    localStorage.setItem("task", task);
  }, [time, task]);

  useEffect(() => {
    if (!isRunning) return; //!isRunning means "if isRunning is false".
    const interval = setInterval(() => setTime((t) => t + 1000), 1000);
    return () => clearInterval(interval);  // so whenever [isRunning] changes it must clear old timer and make new timer so we use clearintervl(the timer data is stored in settime localstorage)
  }, [isRunning]);

  const formatTime = () => {
    const h = String(Math.floor(time / 3600000)).padStart(2, "0");
    const m = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
    const s = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Timer App</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task name..." />
      <h2>{formatTime()}</h2>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => { setIsRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
};

export default App;
