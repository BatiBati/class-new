import { Router } from "express";
import { createCategoryController } from "../controllers/category/createCategoryController";
import { deleteCategoryController } from "../controllers/category/deleteCategoryController";
import { updateCategoryController } from "../controllers/category/updateCategoryController";
import { getCategoryController } from "../controllers/category/getCategoryController";

const categoryRouter = Router();

categoryRouter
  .get("/", getCategoryController)
  .delete("/", deleteCategoryController)
  .patch("/:id", updateCategoryController)
  .post("/", createCategoryController);

export default categoryRouter;
