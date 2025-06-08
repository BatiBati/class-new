import { RequestHandler } from "express";
import { prisma } from "../../db";

export const getAllProfiles: RequestHandler = async (_req, res) => {
  try {
    const profiles = await prisma.profile.findMany();
    res.json(profiles);
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
