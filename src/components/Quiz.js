import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/question/list')
      .then((response) => {
        const decodedQuestions = response.data.map(question => ({
          ...question,
          correctAnswer: atob(question.correctAnswer),
        }));
        setQuestions(decodedQuestions);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  const handleAnswerSelect = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };

  const handleAnswerSubmit = () => {
    if (selectedAnswer !== null) {
      setUserAnswers([...userAnswers, selectedAnswer]);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }

      setSelectedAnswer(null);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  if (questions.length === 0) {
    return (
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg max-w-md">
          <p className="text-lg text-gray-800 mb-4">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg max-w-md">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Your Quiz Result</h2>
            <p className="text-lg text-gray-700 mt-4">Score: {calculateScore()} out of {questions.length}</p>
          </div>
        ) : (
          <div className="question-container">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Question {currentQuestion + 1}</h2>
            <p className="text-lg text-gray-800 mb-4">{questions[currentQuestion].question}</p>
            <div className="options-container grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`option-button bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold py-2 px-4 rounded ${
                    selectedAnswer === option ? 'bg-blue-800' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleAnswerSubmit}
              className="submit-button bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
