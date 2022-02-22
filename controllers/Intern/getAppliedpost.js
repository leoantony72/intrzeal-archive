import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
import("@prisma/client");

export const get_applied_Post = async (req, res) => {
  try {
    const userid = "ckzrv2bh200004ftmeapovpbl";
    const get_applied_Post =
      await prisma.$queryRaw`SELECT a.postid,p.title,p.status,p.salary,p.createdAt FROM "Applicant" a JOIN "Post" p ON p.id = a.postid WHERE a.userid =${userid}`;
    return res.json({ data: get_applied_Post });
  } catch (err) {
    console.log(err.message);
    return res.status(409).json(err);
  }
};
