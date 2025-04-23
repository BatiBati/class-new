import { RequestHandler } from "express";
import { userModel } from "../../models/user.model";

export const getUserController: RequestHandler = async (req, res) => {
  const;

  try {
    const user = await userModel.find({});
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
