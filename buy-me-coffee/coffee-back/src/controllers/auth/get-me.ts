import { prisma } from "../../db";
import { RequestHandler } from "express";
export const getMe = async (req, res) => {
  try {
    const userId = req.id;
    const oneUser = await prisma.user.findMany(userId);

    const user = await prisma.user.findFirst({
      where: { id: userId },
      include: {
        profile: true,
        bankCard: true,
      },
    });
    if (!user) {
      res.status(200).json({ isExist: false });
      return;
    }
    if (user) {
      res.status(200).json({ oneUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
