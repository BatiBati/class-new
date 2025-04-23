import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user";

export const user = Router()
  .get("/", getUserController)
  .delete("/:id", deleteUserController)
  .post("/", createUserController)
  .patch("/", updateUserController)
  .put("/", updateUserController);
