import { checkIfPostexist } from "../model/middlewares/Post.js";

export const checkIfPostExists = async (req, res, next) => {
  const { pid } = req.params;
  const check = await checkIfPostexist(pid);
  const postExist = check[0].count;
  if (postExist === 0)
    return res
      .status(400)
      .json({ status: "failed", err: "Job Post Not Found" });
  next();
};
