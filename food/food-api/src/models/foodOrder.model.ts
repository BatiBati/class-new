import { Schema, model } from "mongoose";
const foodOrderSchema = new Schema({
  user: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: {
    type: [String],
    required: true,
  },
  status: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

export const foodOrderModel = model("foodOrder", foodOrderSchema);
