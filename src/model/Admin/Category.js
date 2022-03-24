import { prisma } from "../../../client.js";

export const addcategory = async (category) => {
  return await prisma.category.create({
    data: {
      category: category,
    },
    select: {
      id: true,
    },
  });
};