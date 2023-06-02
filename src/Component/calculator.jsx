import React, { useState } from 'react';
import "./calculator.css"

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className="calculator">
      <h1>Basic Calculator</h1>
      

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
    <div className="btns">
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      </div>
      
      <div className="result">
      <button> {result && <p>Result: {result}</p>} </button>
      </div>
    </div>
  );
}

export default Calculator;
