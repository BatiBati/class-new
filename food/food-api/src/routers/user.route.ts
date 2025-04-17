import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user";

export const user = Router()
  .get("/", getUserController)
  .delete("/", deleteUserController)
  .post("/", createUserController)
  .patch("/", updateUserController);
