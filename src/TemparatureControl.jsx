import React, { useState } from 'react';

const TemperatureControlApp = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  let backgroundColor;
  if (temperature >= 50) {
    backgroundColor = 'red';
  } else if (temperature >= 30) {
    backgroundColor = 'orange';
  } else {
    backgroundColor = 'yellow';
  }

  return (
    <div className="app" style={{ backgroundColor }}>
      <h1>Temperature Control App </h1>
      
      <div className="temperature_cnt">
        <button onClick={handleDecrement}> ➖ </button>
        <span>{temperature}°C</span>
        <button onClick={handleIncrement}> ➕ </button>
      </div>
    </div>
  );
};

export default TemperatureControlApp;
