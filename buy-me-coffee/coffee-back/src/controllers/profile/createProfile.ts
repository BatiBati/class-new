import { RequestHandler } from "express";
import { prisma } from "../../db";

export const createProfile: RequestHandler = async (req, res) => {
  const {
    name,
    about,
    avatarImage,
    socialMediaUrl,
    backgroundImage,
    successMessage,
    userId,
  } = req.body;

  if (!userId) {
    res.status(400).json({ message: "User id is required" });
  }

  try {
    const profile = await prisma.profile.create({
      data: {
        name,
        about,
        avatarImage,
        socialMediaUrl,
        backgroundImage,
        successMessage,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error, message: "Server Error" });
  }
};
