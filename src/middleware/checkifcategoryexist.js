import { checkIfCategoryExist } from "../model/middlewares/Category.js";

export const checkifCategoryExists = async (req, res, next) => {
  const { category } = req.body;
  if (!category) return res.status(400).json({ status: "failed",err: "Category Not Provided" });

  let categorylength = category.length;
  if (categorylength > 5)
    return res
      .status(400)
      .json({ status: "failed", err: "Only 5 Category allowed" });
  const check = await checkIfCategoryExist(category);

  const n_exist = check[0].count;
  if (categorylength != n_exist)
    return res
      .status(400)
      .json({ status: "failed", err: "Category Not Found" });

  next();
};

//checks length of the array from client
//checks the db for the provided categoryID return Count
//checks if the no.of count === length of array
