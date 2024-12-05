import express from "express";
import connectDB from "./db/connection.js";
import { init } from "./config/init.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

init(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
  connectDB();
});
