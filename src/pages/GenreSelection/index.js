import React from "react";
import { useNavigate } from "react-router-dom";
import quizzesData from "../../data/quizzesData";
import "./GenreSelection.css";

const genreIcons = {
  science: "🧪",
  history: "📜",
  sports: "⚽",
  movies: "🎥",
  math:"➕",
  geography: "🌍"
};

const GenreSelection = () => {
  const navigate = useNavigate();
  const genres = Object.keys(quizzesData);

  return (
    <div className="genre-selection-container">
      <h2 className="genre-title">🎉 Choose Your Quiz Adventure! 🎮</h2>
      <div className="genre-list">
        {genres.map((genre) => (
          <div
            key={genre}
            className="genre-card"
            onClick={() => navigate(`/quiz/${genre}`)}
          >
            <div className="genre-icon">{genreIcons[genre] || "❓"}</div>
            <p className="genre-name">
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
