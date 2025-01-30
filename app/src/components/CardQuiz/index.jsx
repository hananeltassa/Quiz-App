import React, { useState, useEffect } from "react";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import "./CardQuiz.css";

const CardQuiz = ({
  question = "No Question Available",
  options = [],
  onAnswer,
  questionIndex,
  isInput,
  setCurrentQuestionIndex,
  correctAnswer,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setInputValue("");
  }, [questionIndex]);

  const handleSubmit = (answer) => {
    const isCorrect = answer.trim().toLowerCase() === correctAnswer.toLowerCase();
    setSelectedAnswer(isCorrect ? "✅ Correct!" : "❌ Incorrect");
    setIsAnswered(true);

    setTimeout(() => {
      onAnswer(answer);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }, 1500);
  };

  return (
    <div className="card-quiz">
      <h3>{question}</h3>

      <div className="content">
        {isInput ? (
          <div className="input-container">
            <CustomInput
              aria-label={`Question ${questionIndex + 1}`}
              placeholder="Type your answer..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isAnswered}
              className="customInput"
            />
            <CustomButton
              onClick={() => handleSubmit(inputValue)}
              disabled={!inputValue.trim() || isAnswered}
              className="submit-button"
            >
              Submit
            </CustomButton>
          </div>
        ) : (
          <div className="options-container">
            {options.length > 0 ? (
              options.map((option, index) => (
                <CustomButton
                  key={index}
                  onClick={() => handleSubmit(option)}
                  disabled={isAnswered}
                  className={`option-button ${
                    isAnswered
                      ? option.toLowerCase() === correctAnswer.toLowerCase()
                        ? "correct"
                        : "incorrect"
                      : "default"
                  }`}
                >
                  {option}
                </CustomButton>
              ))
            ) : (
              <p className="no-options">No options available</p>
            )}
          </div>
        )}

        {selectedAnswer && <p className="result-text">{selectedAnswer}</p>}
      </div>
    </div>
  );
};

export default CardQuiz;
