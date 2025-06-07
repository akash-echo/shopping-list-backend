import { Request, Response, NextFunction } from "express";
import ShoppingItem from "../models/ShoppingItem";

// GET /items
export const getItems = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const items = await ShoppingItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (error) {
    next(error);
  }
};

// POST /items
export const createItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name } = req.body;
    const item = new ShoppingItem({ name });
    await item.save();

    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

// PUT /items/:id
export const updateItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { bought } = req.body;
    const item = await ShoppingItem.findByIdAndUpdate(
      req.params.id,
      { bought },
      { new: true }
    );

    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.json(item);
  } catch (error) {
    next(error);
  }
};

// DELETE /items/:id
export const deleteItem = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const item = await ShoppingItem.findByIdAndDelete(req.params.id);

    if (!item) {
      res.status(404).json({ error: "Item not found" });
      return;
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
