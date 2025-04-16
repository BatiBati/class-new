import { foodModel } from "../../models/food.model";
import { foodOrderModel } from "../../models/foodOrder.model";

export const deleteFoodOrderController = async (req, res) => {
  const { id } = req.body;

  await foodOrderModel.deleteOne(id, {});
  return res.status(200).json({
    message: "Food order Deleted",
  });
};
