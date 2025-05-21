import { prisma } from "../../db";
import { RequestHandler } from "express";
export const getMe: RequestHandler = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await prisma.user.findFirst({
      where: { id: userId },
      omit: {
        password: true,
      },
      include: {
        profile: true,
        bankCard: true,
      },
    });
    if (!user) {
      res.status(200).json({ isExist: false });
      return;
    }
    res.status(200).json({ isExist: true });
  } catch (error) {
    console.error(error);
  }
};
