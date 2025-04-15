import { foodModel } from "../../models/food.model";

export const getFood = async (req, res) => {
  const foods = await foodModel.find({});
  return res.status(200).json({
    foods,
  });
};
