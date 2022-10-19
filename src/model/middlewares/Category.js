import { prisma } from "../../../client.js";

export const checkIfCategoryExist = async (category) => {
  return await prisma.$queryRaw`SELECT COUNT("id") FROM "Categories" WHERE id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
};
