import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; 
import React from 'react';
import Home from "./pages/Home"; 
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 
import GenreSelection from "./pages/GenreSelection";
import Quizzes from "./pages/Quizzes";
import store from "./redux/store";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<GenreSelection />} />
          <Route path="/quiz/:genre" element={<Quizzes />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
