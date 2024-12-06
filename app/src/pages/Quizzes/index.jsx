import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import CardQuiz from "../../components/CardQuiz";
import CustomButton from "../../components/CustomButton"; 
import { fetchQuizzesByGenre } from "../../redux/slices/quizzesSlice";
import "./Quizzes.css";

const Quizzes = () => {
  const { genre } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { quizzes, loading, error } = useSelector((state) => state.quizzes);

  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); 

  useEffect(() => {
    dispatch(fetchQuizzesByGenre(genre));
  }, [genre, dispatch]);

  const handleAnswer = (answer) => {
    const currentQuestion = quizzes[0]?.questions[currentQuestionIndex]; 
    if (!currentQuestion) return; 

    const isCorrect = answer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 10); 
    }

    setUserAnswers((prev) => [...prev, { question: currentQuestion.questionText, answer, isCorrect }]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleScoreUpdate = (updatedScore) => {
    setScore(updatedScore);
  };

  if (loading) {
    return (
      <div className="quiz-container">
        <h2>Loading quizzes...</h2>
      </div>
    );
  }

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

  if (!quizzes || quizzes.length === 0 || !quizzes[0]?.questions) {
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

  if (!currentQuestion) {
    // Quiz completed
    return (
      <div className="quiz-container">
        <h2>Quiz Completed!</h2>
        <p>Your final score is: {score}</p>
        <CustomButton className="back-button" onClick={() => navigate("/quiz")}>
          Back to Genre Selection
        </CustomButton>
      </div>
    );
  }

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
