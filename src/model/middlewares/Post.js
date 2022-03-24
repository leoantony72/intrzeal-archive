import { prisma } from "../../../client.js";

export const checkif_postexist = async (pid) => {
  return await prisma.$queryRaw`SELECT COUNT(id) FROM "Post" WHERE id=${pid}`;
};
