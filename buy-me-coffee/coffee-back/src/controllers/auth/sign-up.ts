import { RequestHandler } from "express";
import { prisma } from "../../db";
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
    if (!existingUsers) {
      const newUser = await prisma.user.create({
        data: { username: username, email: email, password: password },
      });
      res.status(200).json({ newUser });
    }
  } catch (error) {
    console.error(error);
  }
};
