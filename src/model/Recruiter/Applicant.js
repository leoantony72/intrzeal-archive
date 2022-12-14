import { prisma } from "../../../client.js";

export const getAppliedUsers = async (uid, pid,page,limit) => {
  return await prisma.$queryRaw`SELECT a.post_id,a.user_id,a.description,a."created_at",u.name,u.image FROM "Applicants" a JOIN "Users" u ON a.user_id = u.id JOIN "Posts" p ON a.post_id = p.id WHERE p.user_id=${uid} AND a.post_id=${pid} LIMIT ${limit} OFFSET ${page};`;
};
export const isUserApplied = async (uid,pid) => {
  return await prisma.$queryRaw`SELECT a.user_id FROM "Applicants" a WHERE user_id=${uid} AND post_id=${pid}`;
};

export const updateApplicantStatus = async (pid, uid) => {
  const status = "SELECTED";
  return await prisma.$queryRaw`UPDATE "Applicants" SET status='SELECTED' WHERE post_id=${pid} AND user_id=${uid} RETURNING "Applicants".user_id`;
};
