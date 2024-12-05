import express from "express";
import connectDB from "./db/connection.js";
import { init } from "./config/init.js";

const app = express();

init(app);

app.listen(process.env.SERVER_PORT, () => {
  console.log("Server running on port ${Process.env.SERVER_PORT}");

  connectDB();
});
