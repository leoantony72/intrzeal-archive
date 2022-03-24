import { prisma } from "../../client.js";

export const get_Category = async () => {
  return await prisma.Category.findMany();
};
export const getCategory_by_ID = async (id) => {
  return await prisma.Category.findMany({
    where: {
      id: id,
    },
  });
};