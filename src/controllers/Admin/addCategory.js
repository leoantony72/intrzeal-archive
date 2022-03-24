import { addcategory } from "../../model/Admin/Category.js";

export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const createcategory = await addcategory(category);
    if (!createcategory.id)
      return res.status(400).json({ err: "Something went wrong" });

    return res.status(201).json({ success: "Category Added" });
  } catch (err) {
    if (err.code == "P2002" && err.meta.target[0] == "category")
      return res.status(400).json({ err: `${category} Alredy Added` });
    return res.status(400).json({ err: err.message });
  }
};
