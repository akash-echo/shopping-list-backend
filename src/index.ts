import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

if (!process.env.MONGO_URI) {
  throw new Error("Missing MONGO_URI environment variable");
}

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MongoDB Connected!!!`);
      console.log(`Shopping list app listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
