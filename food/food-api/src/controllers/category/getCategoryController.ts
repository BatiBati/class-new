import { categoryModel } from "../../models/category.model";

export const getCategoryController = async (req, res) => {
  const categoryName = await categoryModel.find({});
  return res.status(200).json({
    categoryName,
  });
};
