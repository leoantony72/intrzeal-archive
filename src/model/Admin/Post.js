import { prisma } from "../../../client.js";

export const deletePost = async (pid) => {
  return await prisma.Posts.delete({
    where: {
      id: pid,
    },
    select: {
      id: true,
    },
  });
};
export const postStats = async () => {
  return await prisma.$queryRaw`SELECT p.status,COUNT(p.status) AS posts FROM "Posts" AS p GROUP BY p.status`;
};
