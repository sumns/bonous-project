import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const questionsData = [
  {
    question: 'JavaScript File Has An Extension of:',
    answers: ['.Java', '.Js', '.javascript', '.xml'],
    correctAnswer: '.Js',
  },
  {
    question: 'Which of the following is used in React.js to increase performance?',
    answers: ['Virtual DOM', 'Original DOM','Both A and B', 'None'],
    correctAnswer: 'Virtual Dom',
  },
  {
    question: 'Which statement cannot be used to declare a variable in JavaScript?',
    answers: ['let', 'var','const', 'int'],
    correctAnswer: 'int',
  },
  {
    question: 'Which of the following is block scoped?',
    answers: ['let', 'var','const', 'Both A and c'],
    correctAnswer: 'Both A and C',
  },
  {
    question: 'Javascript is a _____ language?',
    answers: ['Programming', 'Application','Scripting', 'None'],
    correctAnswer: 'Scripting',
  }
  
];



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  questionsData={questionsData}/>
  </React.StrictMode>,
)
