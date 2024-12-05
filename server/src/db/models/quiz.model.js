import { Schema, model } from "mongoose";

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId, 
    ref: "Genre",
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
