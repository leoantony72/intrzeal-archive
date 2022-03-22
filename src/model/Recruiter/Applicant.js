import { prisma } from "../../../client.js";

export const getApplied_User = async (uid, pid) => {
  return await prisma.$queryRaw`SELECT a.postid,a.userid,a.description,a."createdAt",u.name,u.image FROM "Applicant" a JOIN "User" u ON a.userid = u.id JOIN "Post" p ON a.postid = p.id WHERE p.userid=${uid} AND a.postid=${pid}`;
};

export const updateApplicantStatus = async(pid, uid) => {
  return await prisma.Applicant.updateMany({
    where: {
      postid: pid,
      userid: uid,
    },
    data: {
      status: "SELECTED",
    },
  });
};