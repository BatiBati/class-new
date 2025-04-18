import { Router } from "express";
import {
  createFoodController,
  deleteOneFoodController,
  getFoodController,
  getOneFoodController,
  updateFoodController,
} from "../controllers/food";

export const foodRouter = Router()
  .get("/", getFoodController)
  .get("/:id", getOneFoodController)
  .delete("/:id", deleteOneFoodController)
  .post("/", createFoodController)
  .put("/:id", updateFoodController);
