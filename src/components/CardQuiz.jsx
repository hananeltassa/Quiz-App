import React, { useState } from "react";
import CustomInput from "./CustomInput"; 
import CustomButton from "./CustomButton"; 

const CardQuiz = ({ question, options, onAnswer, questionIndex, isInput, setCurrentQuestionIndex }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    if (inputValue.trim()) {
      console.log("Input submitted:", inputValue);
      onAnswer(inputValue, questionIndex); 
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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
              onClick={() => {
                onAnswer(option, questionIndex);  
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
              }}
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
