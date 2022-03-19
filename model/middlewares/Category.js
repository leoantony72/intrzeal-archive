import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Category {
  static check_Category_exist = async (category) => {
    return await prisma.$queryRaw`SELECT COUNT("id") FROM "Category" WHERE id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
  };
}
