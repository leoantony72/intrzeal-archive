import { getUserRole } from "../model/middlewares/User.js";

export const authorization = (req, res, next) => {
  res.locals.uid = "1";
  next();
};

export const InternValidate = async (req, res, next) => {
  const uid = res.locals.uid;
  const role = await getUserRole(uid);

  if (role[0].role === "INTERN") return next();
  if (role[0].role === "ADMIN") return next();
  return res.status(401).json({ status: "failed", err: "Unauthorized" });
};
export const RecruiterValidate = async (req, res, next) => {
  const uid = res.locals.uid;
  const role = await getUserRole(uid);
  if (role[0].role === "RECRUITER") return next();
  if (role[0].role === "ADMIN") return next();
  return res.status(401).json({ status: "failed", err: "Unauthorized" });
};
export const AdminValidate = async (req, res, next) => {
  const uid = res.locals.uid;
  const role = await getUserRole(uid);
  if (role[0].role === "ADMIN") return next();
  return res.status(401).json({ status: "failed", err: "Unauthorized" });
};
