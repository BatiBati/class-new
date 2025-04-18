import { foodModel } from "../../models/food.model";

export const createFoodController = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const foods = await foodModel.create({
      foodName,
      price,
      image,
      ingredients,
      category,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error, message: "Server error" });
  }
};
