import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/genreSlice";

const store = configureStore({
  reducer: {
    genres: genresReducer,
  },
});

export default store;
