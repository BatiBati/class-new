import { foodOrderModel } from "../../models/foodOrder.model";

export const createFoodOrderController = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;
  await foodOrderModel.create({
    user,
    totalPrice,
    foodOrderItems,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return res.status(201).json({
    message: "Food order created",
  });
};
