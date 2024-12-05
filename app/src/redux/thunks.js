import axios from "axios";
import {
  fetchGenresStart,
  fetchGenresSuccess,
  fetchGenresFailure,
  fetchQuizzesStart,
  fetchQuizzesSuccess,
  fetchQuizzesFailure,
} from "./quizSlice";

// Fetch genres
export const fetchGenres = () => async (dispatch) => {
  dispatch(fetchGenresStart());
  try {
    const response = await axios.get("/api/genres"); 
    dispatch(fetchGenresSuccess(response.data)); 
  } catch (error) {
    dispatch(fetchGenresFailure(error.message));
  }
};

// Fetch quizzes by genre
export const fetchQuizzesByGenre = (genre) => async (dispatch) => {
  dispatch(fetchQuizzesStart());
  try {
    const response = await axios.get(`/api/quizzes/${genre}`); // Replace with your API endpoint
    dispatch(fetchQuizzesSuccess({ [genre]: response.data }));
  } catch (error) {
    dispatch(fetchQuizzesFailure(error.message));
  }
};
