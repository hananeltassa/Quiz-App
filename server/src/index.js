import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import genreRoutes from "./routes/genreRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import userRoutes from "./routes/userRoutes.js"; 
import { init } from "./config/init.js"; 

dotenv.config();

const app = express();

init(app);

app.use(express.json());

app.use("/api", genreRoutes); 
app.use("/api", quizRoutes);
app.use("/api/users", userRoutes)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
  
  connectDB();
});
