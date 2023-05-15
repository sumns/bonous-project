import './App.css'

import React, { useState } from 'react';
import Question from './Question'
import Result from './Result'

const App = ({ questionsData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {

    // Check if the selected answer is correct
    if (selectedAnswer === questionsData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Get the current question from the questionsData array
  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div className='app'>
      
      {currentQuestion ? (
        <Question
          question={currentQuestion.question}
          answers={currentQuestion.answers}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <Result score={score} totalQuestions={questionsData.length} />
      )}
    </div>
  );
};

export default App;
