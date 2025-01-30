import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";
import "./QuizResult.css";

const QuizResult = ({ score, userAnswers }) => {
  const navigate = useNavigate();

  return (
    <div className="quiz-result-container">
      <div className="quiz-result-card">
        <h2>🎉 Quiz Completed!</h2>
        <p className="final-score">Your Final Score: <span>{score}</span></p>
        
        <h3>Your Answers</h3>
        <ul className="answers-list">
          {userAnswers.map((entry, index) => (
            <li key={index} className={`answer-item ${entry.isCorrect ? "correct-answer" : "incorrect-answer"}`}>
              <div className="question-text"><strong>Q{index + 1}:</strong> {entry.question}</div>
              <div className="user-answer">
                <span><strong>Your Answer:</strong> {entry.answer}</span>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="btn-wrapper">
          <CustomButton className="back-button" onClick={() => navigate("/quiz")}>
            Back to Genre Selection
          </CustomButton>
        </div>

      </div>
    </div>
  );
};

export default QuizResult;
