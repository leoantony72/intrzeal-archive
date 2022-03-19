import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Applicant {
  static getAppliedUser = async (uid, pid) => {
    return await prisma.$queryRaw`SELECT a.postid,a.userid,a.description,a."createdAt",u.name,u.image FROM "Applicant" a JOIN "User" u ON a.userid = u.id WHERE a.userid=${uid} AND a.postid=${pid}`;
  };
  //update application status to SELECTED
  static updateApplicantStatus = async(pid, uid) => {
    return await prisma.Applicant.updateMany({
      where: {
        postid: pid,
        userid: uid,
      },
      data: {
        status: "SELECTED",
      },
      select: {
        userid: true,
      },
    });
  };
}
