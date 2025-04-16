import { Router } from "express";

import { createFoodController } from "../controllers/food/createFoodController";
import { deleteFoodController } from "../controllers/food/deleteFoodController";
import { getFoodController } from "../controllers/food/getFoodController";
import { updateFoodController } from "../controllers/food/updateFoodController";

const foodRouter = Router();

foodRouter
  .get("/", getFoodController)
  .delete("/:id", deleteFoodController)
  .patch("/:id", updateFoodController)
  .post("/", createFoodController);

export default foodRouter;
