import { prisma } from "../../../client.js";

export const getCategories = async (page, limit) => {
  return await prisma.Categories.findMany({
    skip: page,
    take: limit,
  });
};
export const getCategoryByID = async (id) => {
  return await prisma.Categories.findMany({
    where: {
      id: id,
    },
  });
};
