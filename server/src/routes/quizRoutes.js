import express from "express";
import { createQuiz, getQuiz, getQuizzesByGenre } from "../controllers/quizController.js";

const router = express.Router();

router.post("/quiz", createQuiz);
router.get("/quiz/:title", getQuiz);
router.get("/quizzes/genre/:genreId", getQuizzesByGenre);

export default router;
