import { prisma } from "../../../client.js";

export const del_post = async (pid) => {
  return await prisma.Posts.delete({
    where: {
      id: pid,
    },
    select: {
      id: true,
    },
  });
};
export const p_stat = async () => {
  return await prisma.$queryRaw`SELECT p.status,COUNT(p.status) AS posts FROM "Posts" AS p GROUP BY p.status`;
};
