import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Applicant {
  //check if user applied to a job post
  static checkifApplied = async (uid, pid) => {
    return await prisma.Applicant.findMany({
      where: {
        userid: uid,
        postid: pid,
      },
      select: {
        createdAt: true,
        status: true,
      },
    });
  };

  static createApplication = async (uid, pid, description, date) => {
    return await prisma.Applicant.create({
      data: {
        userid: uid,
        postid: pid,
        description: description,
        createdAt: date,
      },
      select: {
        userid: true,
      },
    });
  };

  static delApplication = async (pid, uid) => {
    return await prisma.Applicant.deleteMany({
      where: {
        postid: pid,
        userid: uid,
      },
      select: {
        userid: true,
      },
    });
  };

  static getAppliedPost = async (uid) => {
    return await prisma.$queryRaw`SELECT a.postid,p.title,p.status,p.salary,p.createdAt,a.description FROM "Applicant" a JOIN "Post" p ON p.id = a.postid WHERE a.userid =${uid}`;
  };
}
