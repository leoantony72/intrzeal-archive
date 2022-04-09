import { prisma } from "../../client.js";

export const get_Category = async (page, limit) => {
  return await prisma.Categories.findMany({
    skip: page,
    take: limit,
  });
};
export const getCategory_by_ID = async (id) => {
  return await prisma.Categories.findMany({
    where: {
      id: id,
    },
  });
};
