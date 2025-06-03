import { prisma } from "../../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: { email: email },
      include: { profile: true },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      res.status(400).json({ message: "Username or password is invalid" });
      return;
    }
    const { password: hashedPassword, ...userWithoutPassword } = user;

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.SECRET
    );
    res.status(200).json({ token, userWithoutPassword });
  } catch (error) {
    console.log(error);
  }
};
