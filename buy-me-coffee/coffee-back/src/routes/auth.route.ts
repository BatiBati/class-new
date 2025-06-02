import { Router } from "express";
import { checkUserName, getMe, signIn, signUp } from "../controllers/auth";
import { authenticationMiddleware } from "../controllers/middlewares";
export const authRouter = Router()
  .post("/sign-up", authenticationMiddleware, signUp)
  .get("/get-me", authenticationMiddleware, getMe)
  .get("/check-username", checkUserName)
  .post("/sign-in", signIn);
