import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import("@prisma/client");

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  try {
    const uid = "ckzrv2bh200004ftmeapovpbl";
    const getPost =
      await prisma.$queryRaw`SELECT a.postid,a.userid,a.description,a."createdAt",u.name,u.image FROM "Applicant" a JOIN "User" u ON a.userid = u.id WHERE a.userid=${uid} AND a.postid=${pid}`;
    return res.status(200).json({ data: { success: getPost } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
