import { Router } from "express";
import {
  createFoodController,
  deleteFoodController,
  getFoodController,
  updateFoodController,
} from "../controllers/food";

export const foodRouter = Router()
  .get("/", getFoodController)
  .delete("/", deleteFoodController)
  .post("/", createFoodController)
  .patch("/", updateFoodController);
