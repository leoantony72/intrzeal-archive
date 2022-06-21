import { prisma } from "../../../client.js";

export const addCategory = async ({ id, category }) => {
  return await prisma.categories.create({
    data: {
      id: id,
      category: category,
    },
    select: {
      id: true,
    },
  });
};
export const deleteCategory = async ({ id }) => {
  return await prisma.categories.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
    },
  });
};
