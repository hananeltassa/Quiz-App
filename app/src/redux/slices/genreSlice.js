import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchGenres = createAsyncThunk("genres/fetchGenres", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:8080/api/genres");
    return response.data.genres;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const genreSlice = createSlice({
  name: "genres",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default genreSlice.reducer;
