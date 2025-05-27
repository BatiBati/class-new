import { prisma } from "../../db";

export const checkUserName = async (req, res) => {
  const { username } = req.query;

  try {
    const user = await prisma.user.findFirst({
      where: { username: String(username) },
    });

    if (!user) {
      return res.status(200).json(true);
    } else {
      return res.status(200).json(false);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};
