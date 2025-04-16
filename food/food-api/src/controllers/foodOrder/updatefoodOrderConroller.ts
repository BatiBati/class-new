import { RequestHandler } from "express";
import { foodOrderModel } from "../../models/foodOrder.model";

export const updateFoodOrderController: RequestHandler = async (req, res) => {
  const { foodName, price, image, ingredients } = req.body;
  await foodOrderModel.findByIdAndUpdate(req.params.id, {
    foodName,
    price,
    image,
    ingredients,
  });

  res.status(200).json({
    message: "Food updated",
  });
};
