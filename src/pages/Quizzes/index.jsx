import React, { useState } from "react";
import CardQuiz from "../../components/CardQuiz"; 
import quizzesData from "../../data/quizzesData";
import "./Quizzes.css";

const Quizzes = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer, questionIndex) => {
    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionIndex] = answer;
      return updatedAnswers;
    });
  };

  const currentQuestion = quizzesData[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>Quiz: Question {currentQuestionIndex + 1}</h2>
      <CardQuiz
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
        questionIndex={currentQuestionIndex}
        isInput={currentQuestion.isInput} 
        setCurrentQuestionIndex={setCurrentQuestionIndex} 
      />
    </div>
  );
};

export default Quizzes;
