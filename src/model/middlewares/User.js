import { prisma } from "../../../client.js";

export const checkIfUserExist = async (uid) => {
  return await prisma.$queryRaw`SELECT COUNT(id) FROM "Users" WHERE id =${uid}`;
};
export const getUserRole = async (uid) => {
  return await prisma.$queryRaw`SELECT role FROM "Users" WHERE id =${uid}`;
};
