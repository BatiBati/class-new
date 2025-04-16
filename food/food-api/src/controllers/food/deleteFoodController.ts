import { foodModel } from "../../models/food.model";

export const deleteFoodController = async (req, res) => {
  const { id } = req.body;

  await foodModel.deleteOne(id, {});
  return res.status(200).json({
    message: "Food order Deleted",
  });
};
