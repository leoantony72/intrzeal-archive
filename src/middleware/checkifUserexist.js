import { getUserByRole } from "../model/Admin/User.js";
import { checkIfUserExist } from "../model/middlewares/User.js";

export const checkIfUserExists = async (req, res, next) => {
  const { uid } = req.params;
  const check = await checkIfUserExist(uid);
  const userExist = check[0].count;
  if (userExist === 0)
    return res
      .status(400)
      .json({ status: "failed", err: `User :${uid} Not Found` });
  next();
};
