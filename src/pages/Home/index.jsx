import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quizzes">
        <CustomButton className="homeButton">Start Quiz</CustomButton>
      </Link>
    </div>
  );
};

export default Home;
