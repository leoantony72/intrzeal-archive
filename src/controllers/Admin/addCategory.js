import { addcategory } from "../../model/Admin/Category.js";

export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const createcategory = await addcategory(category);
    if (!createcategory.id)
      return res.status(400).json({ data: { err: "Something went wrong" } });

    return res.status(200).json({ data: { success: "Category Added" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
