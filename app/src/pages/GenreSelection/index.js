import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../redux/slices/genreSlice";
import "./GenreSelection.css";

const genreIcons = {
  Science: "🧪",
  History: "📜",
  Football: "⚽",
  Movies: "🎥",
  Math:"➕",
  Geography: "🌍",
  Technology: "👩‍💻",
  Literature: "📖",
  Music: "🎼",
  Sports:"🏅"
  
};

const GenreSelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: genres, loading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  // useEffect(() => {
  //   if (genres.length) {
  //     console.log("Fetched Genres:", genres);
  //   }
  // }, [genres]);

  if (loading) {
    return <div>Loading genres...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="genre-selection-container">
      <h2 className="genre-title">🎉 Choose Your Quiz Adventure! 🎮</h2>
      <div className="genre-list">
        {genres.map((genre) => (
          <div
            key={genre.name}
            className="genre-card"
            onClick={() => navigate(`/quiz/${genre.name}`)}
          >
            <div className="genre-icon">
              {genreIcons[
                genre.name.charAt(0).toUpperCase() + genre.name.slice(1).toLowerCase()
              ] || "❓"}
            </div>
            <p className="genre-name">
              {genre.name.charAt(0).toUpperCase() + genre.name.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSelection;
