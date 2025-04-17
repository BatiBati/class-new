import { Router } from "express";
import { getUserController } from "../controllers/user/getuserController";
import { deleteUserController } from "../controllers/user/deleteUserController";
import { updateCategoryController } from "../controllers/category/updateCategoryController";
import { createUserController } from "../controllers/user/createUserController";

const user = Router();

user.get("/", getUserController)
    .delete("/", deleteUserController)
    .patch("/", updateCategoryController)
    .post("/", createUserController)

export default user;
