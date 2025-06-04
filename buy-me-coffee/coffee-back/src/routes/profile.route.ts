import { Router } from "express";
import { createProfile } from "../controllers/profile";

export const profileRouter = Router().post("/profile", createProfile);
