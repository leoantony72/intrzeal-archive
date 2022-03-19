import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class User_meta_category {
  static addUserskill = async (uid, category) => {
    return await prisma.User_meta_category.create({
      data: {
        userId: uid,
        categoryId: category[0],
      },
      select: {
        userId: true,
      },
    });
  };

  static checkif_user_added_category = async (uid, category) => {
    return await prisma.$queryRaw`SELECT COUNT("userId") FROM "User_meta_category" WHERE "userId"=${uid} AND "categoryId"=${category[0]}`;
  };

  static getUser_skills = async (uid) => {
    return await prisma.$queryRaw`SELECT uc."categoryId",c."category" FROM "User_meta_category" AS uc JOIN "Category" c ON uc."categoryId" = c."id" WHERE uc."userId"=${uid}`;
  };

  static delUser_skill = async (uid, category) => {
    return await prisma.User_meta_category.deleteMany({
      where: {
        userId: uid,
        categoryId: category[0],
      },
      select: {
        userId: true,
      },
    });
  };
}
