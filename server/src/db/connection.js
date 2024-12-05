import {connect} from "mongoose";

const connectDB = async () => {
  try {
    const dbHost= process.env.DB_HOST;
    const dbPort= process.env.DB_PORT;
    const dbUser= process.env.DB_USER;
    const dbName= process.env.DB_NAME;

    const url = '${dbhost}:${dbPort}/${dbName}';

    await connect(url);
    
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
