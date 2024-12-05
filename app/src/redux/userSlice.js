// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    answers: {}, 
    score: 0,
  },
  reducers: {
    saveAnswer(state, action) {
      const { questionIndex, answer } = action.payload;
      state.answers[questionIndex] = answer;
    },
    updateScore(state, action) {
      state.score += action.payload; 
    },
    resetQuiz(state) {
      state.answers = {};
      state.score = 0;
    },
  },
});

export const { saveAnswer, updateScore, resetQuiz } = userSlice.actions;

export default userSlice.reducer;
