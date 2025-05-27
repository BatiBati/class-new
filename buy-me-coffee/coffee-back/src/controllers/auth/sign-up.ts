import { RequestHandler } from "express";
import { prisma } from "../../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signUp: RequestHandler = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUsers = await prisma.user.findFirst({
      where: {
        OR: [{ username: username }, { email: email }],
      },
      include: {
        Donations: true,
        profile: true,
        bankCard: true,
      },
    });

    if (existingUsers) {
      res.status(500).json({ message: "User is already taken" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    if (!existingUsers) {
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
      const { password: userPassword, ...userWithoutPassword } = newUser;
      const token = jwt.sign(
        {
          user: newUser.id,
        },
        process.env.SECRET
      );
      res.status(201).json({
        user: userWithoutPassword,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
