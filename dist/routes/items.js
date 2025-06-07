import express from "express";
import ShoppingItem from "../models/ShoppingItem";

const router = express.Router();

router.get("/", async (_, res) => {
    const items = await ShoppingItem.find().sort({ createdAt: -1 });

    res.json(items);
});

export default router;
