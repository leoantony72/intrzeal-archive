import { Category } from "../model/Category.js";

export const getCategory = async (req, res) => {
  try {
    const getCategory =await Category.getCategory();
    return res.stats(200).json({ data: { success: getCategory } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};

export const getCategory_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await Category.getCategory_by_ID(id);

    return res.status(200).json({ data: { success: getCategory } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
