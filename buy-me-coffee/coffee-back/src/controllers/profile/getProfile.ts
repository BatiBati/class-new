import { RequestHandler } from "express";
import { prisma } from "../../db";

export const getProfile: RequestHandler = async (req, res) => {
  const { profileId } = req.params;
  const id = parseInt(profileId, 10);

  if (isNaN(id)) {
    res.status(400).json({ error: "Invalid profile ID" });
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { id },
    });

    if (!profile) {
      res.status(404).json({ error: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
