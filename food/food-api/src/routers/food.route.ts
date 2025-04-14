import { Router } from "express";
import { getFood } from "../controllers/food/get-food";
import { deleteFood } from "../controllers/food/delete-food";
import { patchFood } from "../controllers/food/patch-food";
import { postFood } from "../controllers/food/post-food";

const foodRouter = Router();

foodRouter
  .get("food", getFood)
  .delete("food", deleteFood)
  .patch("food", patchFood)
  .post("food", postFood);

export default foodRouter;
