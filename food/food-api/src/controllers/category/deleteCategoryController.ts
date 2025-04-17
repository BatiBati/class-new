import { categoryModel } from "../../models/category.model";

export const deleteCategoryController = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteId = await categoryModel.findByIdAndDelete(id, {
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json(deleteId, { message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
