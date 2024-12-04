import React, { useState } from "react";
import CustomInput from "./CustomInput"; 

const CardQuiz = ({ question, options, onAnswer, questionIndex, isInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      onAnswer(inputValue, questionIndex);
      setInputValue(""); 
    }
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
            <button
              className="submit-button"
              onClick={handleInputSubmit}
              disabled={!inputValue.trim()}
            >
              Submit
            </button>
          </div>
        ) : (
          options.map((option, index) => (
            <button
              key={index}
              className="option-button"
              onClick={() => onAnswer(option, questionIndex)}
            >
              {option}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default CardQuiz;
