import { foodModel } from "../../models/food.model";

export const postFood = async (req, res) => {
  const { foodName } = req.body;
  await foodModel.create({
    foodName,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res.status(201).json({
    message: "Food name created",
  });
};
