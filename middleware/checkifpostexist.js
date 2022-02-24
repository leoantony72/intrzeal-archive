import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const checkifpostexist = async (req, res, next) => {
  const { pid } = req.params;
  const check = await prisma.Post.count({
    where: {
      id: pid,
    },
  });
  if (!check) return res.status(404).json({ err: "Job Post Not Found" });
  next();
};
