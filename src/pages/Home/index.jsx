import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>Welcome to the Quiz App</h1>
      <Link to="/quizzes">
        <button className="homeButton">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
