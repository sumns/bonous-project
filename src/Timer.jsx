import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
    
      console.log("Completed!");
    }
    
  }, [timeLeft]);

  const formatTime = () => {
    const minutes = Math.floor(Math.abs(timeLeft) / 60)
    const seconds = (Math.abs(timeLeft) % 60)

    return <button > {minutes} Minute : {seconds} Second </button>
  };

  return (
    <div className='timer'>
      <h1>Timer</h1>
     
      <p>{timeLeft >= 0 ? formatTime() : <h2>"Time Over!" </h2> }</p>
    </div>
  );
}

export default Timer;
