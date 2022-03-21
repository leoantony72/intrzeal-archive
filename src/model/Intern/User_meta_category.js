import { prisma } from "../../../client.js";

export const addUserskill = async (uid, category) => {
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

export const checkif_user_added_category = async (uid, category) => {
  return await prisma.$queryRaw`SELECT COUNT("userId") FROM "User_meta_category" WHERE "userId"=${uid} AND "categoryId"=${category[0]}`;
};

export const getUser_skills = async (uid) => {
  return await prisma.$queryRaw`SELECT uc."categoryId",c."category" FROM "User_meta_category" AS uc JOIN "Category" c ON uc."categoryId" = c."id" WHERE uc."userId"=${uid}`;
};
export const delUser_skills = async (uid, category) => {
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
