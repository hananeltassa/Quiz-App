import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home"; 
import GenreSelection from "./pages/GenreSelection";
import Quizzes from "./pages/Quizzes";
import "./styles/styles.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<GenreSelection />} />
        <Route path="/quiz/:genre" element={<Quizzes />} />
      </Routes>
    </Router>
  );
};

export default App;
