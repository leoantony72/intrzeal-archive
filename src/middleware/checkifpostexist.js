import { checkif_postexist } from "../model/middlewares/Post.js";

export const checkifpostexist = async (req, res, next) => {
  const { pid } = req.params;
  const check = await checkif_postexist(pid);
  if (!check)
    return res.status(404).json({ data: { err: "Job Post Not Found" } });
  next();
};
