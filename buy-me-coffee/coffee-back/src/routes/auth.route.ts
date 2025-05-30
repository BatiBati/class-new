import { Router } from "express";
import { checkUserName, getMe, signIn, signUp } from "../controllers/auth";
export const authRouter = Router()
  .post("/sign-up", signUp)
  .get("/get-me", getMe)
  .get("/check-username", checkUserName)
  .get("/sign-in", signIn);
