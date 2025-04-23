import { RequestHandler } from "express";
import { foodOrderModel } from "../../models/foodOrder.model";

export const getFoodOrderController: RequestHandler = async (req, res) => {
  try {
    const foodOrder = await foodOrderModel.find({});
    res.status(200).json({
      foodOrder,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
