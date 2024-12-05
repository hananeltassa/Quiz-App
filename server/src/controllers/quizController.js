import { Quiz } from "../db/models/quiz.model.js";


export const createQuiz = async (req, res) => {
  try {
    const genre = req.body.genre;  
    const quiz = new Quiz({
      title: req.body.title,
      description: req.body.description,
      genre: genre,
      questions: req.body.questions,
    });

    await quiz.save();
    res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
    res.status(400).json({ message: "Error creating quiz", error });
  }
};


export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ title: req.params.title }).populate("genre", "name");
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json({ message: "Quiz found", quiz });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving quiz", error });
  }
};


export const getQuizzesByGenre = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ genre: req.params.genreId }).populate("genre", "name");
    if (!quizzes || quizzes.length === 0) {
      return res.status(404).json({ message: "No quizzes found for this genre" });
    }
    res.status(200).json({ message: "Quizzes found", quizzes });
  } catch (error) {
    res.status(400).json({ message: "Error retrieving quizzes", error });
  }
};
