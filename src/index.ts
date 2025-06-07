import app from "./app";
import mongoose from "mongoose";

const PORT = 8000;
const MONGO_URI = "mongodb://127.0.0.1:27017/shoppinglist";

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
