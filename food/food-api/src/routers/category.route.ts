import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoryController,
  updateCategoryController,
} from "../controllers/category";

export const categoryRouter = Router()
  .get("/:id", getCategoryController)
  .delete("/", deleteCategoryController)
  .post("/", createCategoryController)
  .patch("/", updateCategoryController);
