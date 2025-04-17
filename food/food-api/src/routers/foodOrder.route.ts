import { Router } from "express";
import {
  createFoodOrderController,
  deleteFoodOrderController,
  getFoodOrderController,
  updateFoodOrderController,
} from "../controllers/foodOrder";

export const foodOrder = Router()
  .get("/", getFoodOrderController)
  .delete("/", deleteFoodOrderController)
  .post("/", createFoodOrderController)
  .patch("/", updateFoodOrderController);
