import { checkif_Userexist } from "../model/middlewares/User.js";

export const checkifUserexist = async (req, res, next) => {
  const { uid } = req.params;
  const check = await checkif_Userexist(uid);
  const n_exist = check[0].count;
  if (n_exist === 0)
    return res
      .status(400)
      .json({ status: "failed", err: `User :${uid} Not Found` });
  next();
};
