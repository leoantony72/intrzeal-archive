import { prisma } from "../../../client.js";

export const addcategory = async (category) => {
  return await prisma.categories.create({
    data: {
      category: category,
    },
    select: {
      id: true,
    },
  });
};