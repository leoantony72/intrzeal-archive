import { check_Category_exist } from "../model/middlewares/Category.js";

export const checkif_category_exist = async (req, res, next) => {
  const { category } = req.body;
  if (!category) return res.status(400).json({ err: "Category Not Provided" });

  let n_category = category.length;
  if (n_category > 5)
    return res.status(400).json({ err: "Only 5 Category allowed" });
  const check = await check_Category_exist(category);

  const n_exist = check[0].count;
  if (n_category != n_exist)
    return res.status(400).json({ err: "Category Not Found" });

  next();
};

//checks length of the array from client
//checks the db for the provided categoryID return Count
//checks if the no.of count === length of array
