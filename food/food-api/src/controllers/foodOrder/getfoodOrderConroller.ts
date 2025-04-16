import { foodOrderModel } from "../../models/foodOrder.model";

export const getFoodOrderController = async (req, res) => {
  const foodOrder = await foodOrderModel.find({});
  return res.status(200).json({
    foodOrder,
  });
};
