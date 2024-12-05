import { Quiz } from "../db/models/quiz.model.js";
import { Genre } from "../db/models/genre.model.js";

export const createQuiz = async (req, res) => {
  const { genre, questions } = req.body;

  try {
    if (!genre || !questions || questions.length === 0) {
      return res.status(400).json({ message: "Genre and questions are required" });
    }

    const foundGenre = await Genre.findOne({ name: genre });
    if (!foundGenre) {
      return res.status(404).json({ message: "Genre not found" });
    }

    const newQuiz = new Quiz({
      genre: foundGenre.name,  
      questions,
    });

    await newQuiz.save();

    return res.status(201).json({ message: "Quiz created successfully", quiz: newQuiz });
  } catch (error) {
    console.error("Error creating quiz:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getQuiz = async (req, res) => {
  const { genre } = req.query;  

  try {
    const quizzes = await Quiz.find({ genre });

    if (quizzes.length === 0) {
      return res.status(404).json({ message: "No quizzes found for this genre" });
    }

    return res.status(200).json({ quizzes });
  } catch (error) {
    console.error("Error fetching quizzes:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

