import { prisma } from "../../../client.js";

export const delCategories = async (category) => {
  await prisma.categories.delete({
    where: {
      category: category,
    },
  });
};
