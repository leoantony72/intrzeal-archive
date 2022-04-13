import { prisma } from "../../../client.js";

export const addcategory = async ({ id, category }) => {
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
export const delcategory = async ({ id }) => {
  return await prisma.categories.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
    },
  });
};
