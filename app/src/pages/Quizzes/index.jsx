import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CardQuiz from "../../components/CardQuiz";
import CustomButton from "../../components/CustomButton"; 
import quizzesData from "../../data/quizzesData";
import "./Quizzes.css";

const Quizzes = () => {
  const { genre } = useParams(); 
  const genreQuizzes = quizzesData[genre];
  const navigate = useNavigate();

  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  if (!genreQuizzes || genreQuizzes.length === 0) {
    return (
      <div className="quiz-container">
        <h2>No Quizzes Found for {genre.toUpperCase()}</h2>
        <CustomButton className="back-button" onClick={() => navigate("/")}>
          Back to Genre Selection
        </CustomButton>
      </div>
    );
  }

  const handleAnswer = (answer, questionIndex) => {
    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[questionIndex] = answer;
      return updatedAnswers;
    });
  };

  const handleScoreUpdate = (isCorrect) => {
    if(isCorrect){
      setScore((prevScore) => prevScore + 10);
    }
  };
  
  const currentQuestion = genreQuizzes[currentQuestionIndex];


  if (!currentQuestion) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <p>Your final score is: {score}</p>
      </div>
    );
  }
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
        score={score}
        setScore={handleScoreUpdate}
        correctAnswer={currentQuestion.correctAnswer}
      />
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quizzes;
