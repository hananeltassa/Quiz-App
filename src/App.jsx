import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home"; 
import Quizzes from "./pages/Quizzes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </Router>
  );
};

export default App;
