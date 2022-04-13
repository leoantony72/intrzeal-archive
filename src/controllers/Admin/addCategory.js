import { CategoryService } from "../../services/Admin/CategoryService.js";

const CategoryServiceInstance = new CategoryService();
export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const addcategory = await CategoryServiceInstance.addCategory({
      category: category,
    });
    if (!addcategory.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res.status(201).json({ status: "success", data: "Category Added" });
  } catch (err) {
    if (err.code == "P2002" && err.meta.target[0] == "category")
      return res
        .status(400)
        .json({ status: "failed", err: `${category} Already Added` });
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
