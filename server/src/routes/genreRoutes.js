import express from "express";
import { createGenre, getGenre, getAllGenres } from "../controllers/genreController.js";

const router = express.Router();

router.post("/genre", createGenre);
router.get("/genre/:name", getGenre);
router.get("/genres", getAllGenres);

export default router;