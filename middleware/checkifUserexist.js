import { User } from "../model/middlewares/User.js";

export const checkifUserexist = async (req, res, next) => {
  const { uid } = req.query;
  const check = User.checkifUserexist(uid);
  if (!check)
    return res.status(404).json({ data: { err: `User :${uid} Not Found` } });
  next();
};
