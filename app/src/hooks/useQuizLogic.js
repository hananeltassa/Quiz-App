import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizzesByGenre } from "../redux/slices/quizzesSlice";

const useQuizLogic = (genre) => {
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
    if (isCorrect) setScore((prev) => prev + 10);

    setUserAnswers((prev) => [...prev, { 
      question: currentQuestion.questionText, 
      answer, 
      isCorrect 
    }]);

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return {
    quizzes,
    loading,
    error,
    userAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    score,
    handleAnswer,
  };
};

export default useQuizLogic;
