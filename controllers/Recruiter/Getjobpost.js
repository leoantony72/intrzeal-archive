import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import("@prisma/client");

export const getPost = async (req, res) => {
  try {
    const userid = "ckzkossio0000o8tmliq9p2yt";
    const getPost =
      await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category FROM "Post" p JOIN "Post_category" pc ON p.id = pc.postid JOIN "Category" c ON pc.category_id = c.id WHERE p.status = ${"OPEN"}`;
    return res.json({ data: getPost });
  } catch (err) {
    console.log(err.message);
    return res.status(409).json(err);
  }
};

export const getPost_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getPost =
      await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.descriptions,p.salary,p.createdat,c.category FROM "Post" p JOIN "Post_category" pc ON p.id = pc.postid JOIN "Category" c ON pc.category_id = c.id WHERE p.id=${id}`;

    return res.json({ data: getPost });
  } catch (err) {
    return res.status(409).json(err);
  }
};
