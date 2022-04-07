import { prisma } from "../../../client.js";

export const checkifApplied = async (uid, pid) => {
  return await prisma.Applicants.findMany({
    where: {
      user_id: uid,
      post_id: pid,
    },
    select: {
      created_at: true,
      status: true,
    },
  });
};

export const createApplication = async (uid, pid, description, date) => {
  return await prisma.Applicants.create({
    data: {
      user_id: uid,
      post_id: pid,
      description: description,
      created_at: date,
    },
    select: {
      user_id: true,
    },
  });
};

export const getAppliedPost = async (uid) => {
  return await prisma.$queryRaw`SELECT a.post_id,p.title,p.status,p.salary,p.created_at,a.description FROM "Applicants" a JOIN "Posts" p ON p.id = a.post_id WHERE a.user_id =${uid}`;
};

export const delApplication = async (pid, uid) => {
  return await prisma.Applicants.deleteMany({
    where: {
      post_id: pid,
      user_id: uid,
    },
  });
};
export const getJobStatus = async (pid) => {
  return await prisma.Posts.findMany({
    where: {
      id: pid,
    },
    select: {
      user_id: true,
      status: true,
    },
  });
};
