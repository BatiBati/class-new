import { Router } from "express";
import { getCategory } from "../controllers/category/get-category";

const categoryRouter = Router();

categoryRouter.get("category", getCategory).patch("category");

export default categoryRouter;
