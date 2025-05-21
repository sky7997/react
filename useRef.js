import React, { useState, useEffect, useRef } from 'react';

function PreviousValueExample() {
  const [count, setCount] = useState(0);

  // useRef to store the previous count
  const prevCountRef = useRef();

  useEffect(() => {
    // Update ref *after* render
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>useRef to Track Previous State</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: '8px 12px' }}>
        Increment
      </button>
    </div>
  );
}

export default PreviousValueExample
..................................................................................
  import React, { useRef, useState } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Stopwatch</h2>
      <h1>{time}s</h1>
      <button onClick={startTimer} style={{ marginRight: '10px' }}>Start</button>
      <button onClick={stopTimer} style={{ marginRight: '10px' }}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;

