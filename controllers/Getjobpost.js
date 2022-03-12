import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
// const prisma = new PrismaClient({
//   log: ["query"],
// });
import("@prisma/client");

export const getPost = async (req, res) => {
  const category = Array(req.query.category);
  try {

    if (category[0] == undefined) {
      const getPost =
        await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
      FROM "Post" p 
      JOIN "Post_category" pc ON p.id = pc.postid
      JOIN "Category" c ON pc.category_id = c.id 
      WHERE p.status = 'OPEN'`;
      return res.status(200).json({ data: { success: getPost } });
    } else if (category.length >> 0) {
      const getPost =
        await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
         FROM "Post" p 
         JOIN "Post_category" pc ON p.id = pc.postid
         JOIN "Category" c ON pc.category_id = c.id 
         WHERE p.status = 'OPEN' AND pc.category_id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
      return res.status(200).json({ data: { success: getPost } });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};

export const getPost_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getPost =
      await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.descriptions,p.salary,p.createdat,c.category FROM "Post" p JOIN "Post_category" pc ON p.id = pc.postid JOIN "Category" c ON pc.category_id = c.id WHERE p.id=${id}`;

    return res.json({ data: { success: getPost } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
