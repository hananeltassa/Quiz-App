import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import Confetti from "react-confetti";
import "./Home.css";

const Home = () => {
  const [confetti, setConfetti] = useState(false);

  const handleStartQuiz = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 3000); // Stop confetti after 3 seconds
  };

  return (
    <div className="homeContainer">
      <h1>Welcome to the Quiz App</h1>
      {confetti && <Confetti />}
      <Link to="/quiz">
        <CustomButton className="homeButton" onClick={handleStartQuiz}>
          Start Quiz
        </CustomButton>
      </Link>
    </div>
  );
};

export default Home;
