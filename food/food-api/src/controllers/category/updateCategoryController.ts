import { RequestHandler } from "express";
import { categoryModel } from "../../models/category.model";

export const updateCategoryController: RequestHandler = async (req, res) => {
  const { categoryName } = req.body;
  await categoryModel.findByIdAndUpdate(req.params.id, {
    categoryName,
  });

  res.status(200).json({
    message: "Food updated",
  });
};
