import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genreSlice";
import quizzesReducer from "./slices/quizzesSlice";

const store = configureStore({
  reducer: {
    genres: genresReducer,
    quizzes: quizzesReducer,
  },
});

export default store;
