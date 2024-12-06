import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuizzesByGenre = createAsyncThunk(
    "quizzes/fetchQuizzesByGenre",
    async (genre, thunkAPI) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/quizzes/genre?genre=${genre}`, {
          params: { genre },
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        });
        return response.data.quizzes;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || "Something went wrong"
        );
      }
    }
  );
  
  const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
      quizzes: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchQuizzesByGenre.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchQuizzesByGenre.fulfilled, (state, action) => {
          state.loading = false;
          state.quizzes = action.payload;
        })
        .addCase(fetchQuizzesByGenre.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default quizzesSlice.reducer;