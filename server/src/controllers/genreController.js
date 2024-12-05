import { Genre } from "../db/models/genre.model.js";

export const createGenre = async (req, res) => {
  try {
    const genre = new Genre({
      name: req.body.name,
      description: req.body.description,
    });
    await genre.save();
    res.status(201).json({ message: "Genre created successfully", genre });
  } catch (error) {
    res.status(400).json({ message: "Error creating genre", error });
  }
};

export const getGenre = async (req, res) => {
  try {
    const genre = await Genre.findOne({ name: req.params.name });
    if (!genre) {
      return res.status(404).json({ message: "Genre not found" });
    }
    res.status(200).json({ message: "Genre found", genre });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving genre", error });
  }
};


export const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json({ genres });
  } catch (error) {
    res.status(400).json({ message: "Error fetching genres", error });
  }
};
