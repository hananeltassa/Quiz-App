import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useQuizLogic from "../../hooks/useQuizLogic";
import CardQuiz from "../../components/CardQuiz";
import CustomButton from "../../components/CustomButton";
import QuizResult from "../../components/QuizResult";
import "./Quizzes.css";

const Quizzes = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const {
    quizzes,
    loading,
    error,
    userAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    handleAnswer,
  } = useQuizLogic(genre);

  if (loading) return <div className="quiz-container"><h2>Loading quizzes...</h2></div>;

  if (error) {
    return (
      <div className="quiz-container">
        <h2>Error: {error}</h2>
        <CustomButton className="back-button" onClick={() => navigate("/quiz")}>
          Back to Genre Selection
        </CustomButton>
      </div>
    );
  }

  if (!quizzes?.length || !quizzes[0]?.questions) {
    return (
      <div className="quiz-container">
        <h2>No Quizzes Found for {genre.toUpperCase()}</h2>
        <CustomButton className="back-button" onClick={() => navigate("/quiz")}>
          Back to Genre Selection
        </CustomButton>
      </div>
    );
  }

  const currentQuestion = quizzes[0]?.questions[currentQuestionIndex];

  if (!currentQuestion) return <QuizResult score={score} userAnswers={userAnswers} />;

  return (
    <div className="quiz-container">
      <h2>Quiz: Question {currentQuestionIndex + 1}</h2>
      <CardQuiz
        question={currentQuestion.questionText}
        options={currentQuestion.options}
        onAnswer={handleAnswer}
        questionIndex={currentQuestionIndex}
        isInput={currentQuestion.isInput}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        score={score}
        correctAnswer={currentQuestion.correctAnswer}
      />
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quizzes;
