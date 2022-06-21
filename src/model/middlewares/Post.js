import { prisma } from "../../../client.js";

export const checkIfPostexist = async (pid) => {
  return await prisma.$queryRaw`SELECT COUNT(id) FROM "Posts" WHERE id=${pid}`;
};
