// components/Quiz.js
import React, { useState } from 'react';

function Quiz() {
  const [startExam, setStartExam] = useState(false);

  // Sample questions and answer options
  const questions = [
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Madrid', 'Paris'],
      correctAnswer: 'Paris',
    },
    // Add more questions here
  ];

  // Function to start the exam
  const handleStartExam = () => {
    setStartExam(true);
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold">Quiz Questions</h2>
      {startExam ? (
        // Display questions and answer options
        questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input type="radio" id={`q${index}o${optionIndex}`} name={`q${index}`} value={option} />
                <label htmlFor={`q${index}o${optionIndex}`}>{option}</label>
              </div>
            ))}
          </div>
        ))
      ) : (
        // Display start button
        <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handleStartExam}>
          Start Exam
        </button>
      )}
    </div>
  );
}

export default Quiz;
