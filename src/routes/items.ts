import express from "express";

import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemsController";

const router = express.Router();

// Get all the shopping items
router.get("/", getItems);

// Create a shopping item
router.post("/", createItem);

// Update a shopping item
router.put("/:id", updateItem);

// Delete a shopping item
router.delete("/:id", deleteItem);

export default router;
