import { RequestHandler } from "express";
import { foodModel } from "../../models/food.model";

export const updateFoodController: RequestHandler = async (req, res) => {
  const { foodName, price, image, ingredients } = req.body;
  await foodModel.findByIdAndUpdate(req.params.id, {
    foodName,
    price,
    image,
    ingredients,
  });

  res.status(200).json({
    message: "Food updated",
  });
};
