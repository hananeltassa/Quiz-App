import { User } from "../db/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashed,
    });

    return res.json(newUser);
  } catch (error) {
    console.error("Error during registration:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(404).json({ message: "Invalid Credentials" });
      }
  
      console.log("Password from request:", password); 
      console.log("Password from database:", user.password);
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
  
      const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "1h" });
  
      return res.status(200).json({ token, user });
    } catch (error) {
      console.error("Error during login:", error.message);
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
  
