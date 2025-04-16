import { categoryModel } from "../../models/category.model";

export const deleteCategoryController = async (req, res) => {
  const { id } = req.body;
  await categoryModel.findByIdAndDelete(id, {});
  return res.status(201).json({
    message: "Category deleted",
  });
};
