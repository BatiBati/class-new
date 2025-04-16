import { Router } from "express";
import { getFoodOrderController } from "../controllers/foodOrder/getfoodOrderConroller";
import { deleteFoodOrderController } from "../controllers/foodOrder/deletefoodOrderConroller";
import { updateFoodOrderController } from "../controllers/foodOrder/updatefoodOrderConroller";
import { createFoodOrderController } from "../controllers/foodOrder/createfoodOrderConroller";

const foodOrder = Router();

foodOrder
  .get("/", getFoodOrderController)
  .delete("/", deleteFoodOrderController)
  .patch("/", updateFoodOrderController)
  .post("/", createFoodOrderController);

export default foodOrder;
