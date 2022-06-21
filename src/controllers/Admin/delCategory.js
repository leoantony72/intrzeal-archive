import { CategoryService } from "../../services/Admin/CategoryService.js";

const CategoryServiceInstance = new CategoryService();

export const delete_category = async (req, res) => {
  const { category } = req.query;

  try {
    const del_category = await CategoryServiceInstance.deleteCategory({
      category: category,
    });
    if (!del_category.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res.status(201).json({ status: "success", data: "Category Deleted" });
  } catch (err) {
    if (err.code == "P2015")
      return res
        .status(400)
        .json({ status: "failed", err: `${category} Not Found` });
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
