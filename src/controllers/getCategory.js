import { get_Category, getCategory_by_ID } from "../model/Category.js";

export const getCategory = async (req, res) => {
  try {
    const getCategorys = await get_Category();
    return res.status(200).json({ success: getCategorys });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

export const getCategory_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await getCategory_by_ID(id);
    if (getCategory.length === 0)
      return res.status(400).json({ err: "Category Not Found" });

    return res.status(200).json({ success: getCategory });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
