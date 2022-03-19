import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Category {
  static getCategory = async () => {
    return await prisma.Category.findMany();
  };
  static getCategory_by_ID = async (id) => {
    return await prisma.Category.findMany({
      where: {
        id: id,
      },
    });
  };
}
