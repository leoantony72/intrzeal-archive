import { checkif_Userexist } from "../model/middlewares/User.js";

export const checkifUserexist = async (req, res, next) => {
  const { uid } = req.query;
  const check = checkif_Userexist(uid);
  if (!check)
    return res.status(400).json({ data: { err: `User :${uid} Not Found` } });
  next();
};
