import { Router } from "express";
import { getUser } from "../controllers/user/get-user";

export const userRouter = Router().get("/us", getUser).get("/", getUser);
