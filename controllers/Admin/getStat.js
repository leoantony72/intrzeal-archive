import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getStat = async (req, res) => {
  const { role } = req.query;
  try {
    const getUser_Stat =
      await prisma.$queryRaw`SELECT u.role,COUNT(u.id) AS USERS FROM "User" AS u GROUP BY u.role`;
    const getPost_Stat =
      await prisma.$queryRaw`SELECT p.status,COUNT(p.status) AS posts FROM "Post" AS p GROUP BY p.status`;
    return res.status(200).json({
      data: { success: { user: getUser_Stat, post: getPost_Stat } },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
