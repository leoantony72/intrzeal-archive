import { prisma } from "../../../client.js";

export const getApplied_User = async (uid, pid) => {
  return await prisma.$queryRaw`SELECT a.postid,a.userid,a.description,a."createdAt",u.name,u.image FROM "Applicant" a JOIN "User" u ON a.userid = u.id JOIN "Post" p ON a.postid = p.id WHERE p.userid=${uid} AND a.postid=${pid}`;
};
export const checkIfUserApplied = async (uid) => {
  return await prisma.$queryRaw`SELECT a.userid FROM "Applicant" a WHERE userid=${uid}`;
};

export const updateApplicant_Status = async (pid, uid) => {
  const status = "SELECTED";
  return await prisma.$queryRaw`UPDATE "Applicant" SET status='SELECTED' WHERE postid=${pid} AND userid=${uid} RETURNING "Applicant".userid`;
};
