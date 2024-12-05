import express from "express";
import { createQuiz, getQuiz } from "../controllers/quizController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/quiz", authMiddleware, createQuiz);
router.get("/quizzes/genre",  authMiddleware, getQuiz);

export default router;
