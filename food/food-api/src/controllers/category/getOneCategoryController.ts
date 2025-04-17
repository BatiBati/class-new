import { RequestHandler } from "express";
import { categoryModel } from "../../models/category.model";

export const getCategoryController: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const oneCategory = await categoryModel.findById(id);
};
