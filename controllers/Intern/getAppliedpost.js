import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import("@prisma/client");

export const get_applied_Post = async (req, res) => {
  try {
    const userid = "ckzrv2bh200004ftmeapovpbl";
    const get_applied_Post =
      await prisma.$queryRaw`SELECT a.postid,p.title,p.status,p.salary,p.createdAt,a.description FROM "Applicant" a JOIN "Post" p ON p.id = a.postid WHERE a.userid =${userid}`;
    return res.status(200).json({ data: get_applied_Post });
  } catch (err) {
    return res.status(400).json({err:err});
  }
};
