import { userModel } from "../../models/user.model";

export const createUserController = async (req, res) => {
  const {
    email,
    password,
    phoneNumber,
    address,
    role,
    orderedFoods,
    ttl,
    isVerified,
  } = req.body;
  await userModel.create({
    email,
    password,
    phoneNumber,
    address,
    role,
    orderedFoods,
    ttl,
    isVerified,
    updatedAt: new Date(),
    createdAt: new Date(),
  });
  return res.status(200).json({
    message: "User created",
  });
};
