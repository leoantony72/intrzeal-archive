import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const checkifUserexist = async (req, res, next) => {
  const { uid } = req.query;
  const check = await prisma.User.count({
    where: {
      id: uid,
    },
  });
  if (!check)
    return res.status(404).json({ data: { err: `User :${uid} Not Found` } });
  next();
};
