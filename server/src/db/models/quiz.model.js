import { Schema, model } from "mongoose";

const quizSchema = new Schema({
  genre: {
    type: String,
    required: true,
  },
  questions: [{
    questionText: {
      type: String,
      required: true,
    },
    options: [{
      type: String,
      required: true,
    }],
    correctAnswer: {
      type: String,
      required: true,
    },
    isInput: {
      type: Boolean,
      default: false,
    },
  }],
}, { timestamps: true });


export const Quiz = model("Quiz", quizSchema);
