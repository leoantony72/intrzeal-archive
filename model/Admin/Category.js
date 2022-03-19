import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Category {
  static addcategory = async (category) => {
    return await prisma.category.create({
      data: {
        category: category,
      },
      select: {
        id: true,
      },
    });
  };
}
