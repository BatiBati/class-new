import { Router } from "express";
import { createProfile, getProfile } from "../controllers/profile";
import { getAllProfiles } from "../controllers/profile/getAllProfiles";

export const profileRouter = Router()
  .post("/", createProfile)
  .get("/:profileId", getProfile)
  .get("/", getAllProfiles);
