import { prisma } from "../../client.js";

export const get_Category = async () => {
  return await prisma.Categories.findMany();
};
export const getCategory_by_ID = async (id) => {
  return await prisma.Categories.findMany({
    where: {
      id: id,
    },
  });
};