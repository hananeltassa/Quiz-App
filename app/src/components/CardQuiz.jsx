import React, { useState } from "react";
import CustomInput from "./CustomInput"; 
import CustomButton from "./CustomButton"; 

const CardQuiz = ({ question, options, onAnswer, questionIndex, isInput, setCurrentQuestionIndex, score, setScore, correctAnswer }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      const isCorrect = inputValue.trim().toLowerCase() === correctAnswer.toLowerCase(); 
      setScore(isCorrect);
      onAnswer(inputValue, questionIndex); 
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setInputValue("");
    }
  };

  const handleOptionClick = (option) => {
    const isCorrect = option.toLowerCase() === correctAnswer.toLowerCase();
    setScore(isCorrect);
    onAnswer(option, questionIndex);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  
  return (
    <div className="quiz-card">
      <h3>{question}</h3>
      <div className="quiz-options">
        {isInput ? (
          <div className="input-container">

            <CustomInput
              aria-label={`Question ${questionIndex + 1}`}
              placeholder="Type your answer..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <CustomButton
              onClick={handleInputSubmit}  
              disabled={!inputValue.trim()} 
            >
              Submit
            </CustomButton>
          </div>
        ) : (
          options.map((option, index) => (
            <CustomButton
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </CustomButton>
          ))
        )}
      </div>
    </div>
  );
};

export default CardQuiz;
