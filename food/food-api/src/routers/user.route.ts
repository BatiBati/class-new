import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/user";

export const user = Router()
  .get("/", getUserController)
  .get("/:id", getUserController)
  .delete("/:id", deleteUserController)
  .post("/", createUserController)
  .patch("/:id", updateUserController)
  .put("/:id", updateUserController);
