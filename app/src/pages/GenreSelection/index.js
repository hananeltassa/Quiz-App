import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../../redux/slices/genreSlice";
import genreIcons from "../../utils/genreIcons";
import LoadingScreen from "../../components/LoadingScreen";
import "./GenreSelection.css";

const GenreSelection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: genres, loading, error } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  if (loading) return <LoadingScreen message="Loading genres..." />;
  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div className="genre-selection-container">
      <h2 className="genre-title">🎉 Choose Your Quiz Adventure! 🎮</h2>
      <div className="genre-list">
        {genres.map(({ name }) => {
          const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
          return (
            <div
              key={name}
              className="genre-card"
              onClick={() => navigate(`/quiz/${name}`)}
            >
              <div className="genre-icon">{genreIcons[formattedName] || "❓"}</div>
              <p className="genre-name">{formattedName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GenreSelection;
