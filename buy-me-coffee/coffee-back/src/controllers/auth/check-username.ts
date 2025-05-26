import { RequsetHandler } from "express";
import { prisma } from "../../db";

export const checkUserName: RequsetHandler = (req, res) => {
  const { username } = req.body;
  try {
    const user = prisma.user.findMany({
      where: { username },
    });

    if (!user) {
      res.status(200).json({ isExist: false });
      return;
    }
    res.status(200).json({ isExist: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
