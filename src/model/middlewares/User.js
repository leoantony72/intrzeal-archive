import { prisma } from "../../../client.js";

export const checkif_Userexist = async (uid) => {
  return await prisma.$queryRaw`SELECT COUNT(id) FROM "Users" WHERE id =${uid}`;
};
