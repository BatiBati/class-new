import { RequestHandler } from "express";
import { userModel } from "../../models/user.model";

export const signUp: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await userModel.create({
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({ message: "User created", userData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
