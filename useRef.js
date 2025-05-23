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

const UsinguseRef=()=>{
   

   
      const [time, setTime] = useState(0);
      const intervalRef=useRef(null)
    
      const startTimer = () => {
       if (intervalRef.current !== null) return //intervalRef.current !== null implies the timer is running.
       intervalRef.current=setInterval(()=>{
        setTime(prev=>prev+1)
       },1000)
      };
    
      const stopTimer = () => {
       clearInterval(intervalRef.current)
       intervalRef.current=null //If we didn’t set it to null, startTimer() might think an interval is still running and refuse to start a new one.
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
    
    
    
export default UsinguseRef
