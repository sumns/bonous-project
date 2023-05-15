import React from 'react';

const Question = ({ question, answers, onAnswerClick }) => {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <p onClick={() => onAnswerClick(answer)}>{answer}</p>
          </li>
        ))}
      </ul>
 
    </div>
  );
};

export default Question;