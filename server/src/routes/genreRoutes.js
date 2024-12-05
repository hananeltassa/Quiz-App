import express from "express";
import { createGenre, getGenre, getAllGenres } from "../controllers/genreController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/genre", authMiddleware, createGenre);
router.get("/genre/:name", authMiddleware, getGenre);
router.get("/genres", getAllGenres);          

export default router;
