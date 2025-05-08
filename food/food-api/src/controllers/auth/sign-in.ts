import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import { userModel } from "../../models/user.model";

export const signIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({
      email,
    });

    if (!user) {
      res.status(404).json({ message: "Username or password is invalid" });
      return;
    }
    const { password: hashedPassword, ...userWithoutPassword } =
      user.toObject();

    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
    if (!isPasswordMatch) {
      res.status(404).json({ message: "Username or password is invalid" });
      return;
    }

    // const token = jwt.sign
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
