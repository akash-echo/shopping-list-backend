import express from "express";
import cors from "cors";

import itemsRouter from "./routes/items";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use("/items", itemsRouter);

export default app;
