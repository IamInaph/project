import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

dotenv.config();

const dropIndex = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");

    // Drop the username index
    await mongoose.connection.collection("users").dropIndex("username_1");
    console.log("Dropped username_1 index successfully");

    process.exit(0);
  } catch (error) {
    if (error.code === 27) {
      console.log("Index doesn't exist, nothing to drop");
    } else {
      console.error("Error:", error.message);
    }
    process.exit(1);
  }
};

dropIndex();
