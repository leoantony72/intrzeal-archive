import { prisma } from "../../../client.js";

export const addUserskill = async (uid, category) => {
  return await prisma.User_meta_categories.create({
    data: {
      user_id: uid,
      category_id: category[0],
    },
    select: {
      user_id: true,
    },
  });
};

export const checkif_user_added_category = async (uid, category) => {
  return await prisma.$queryRaw`SELECT COUNT("user_id") FROM "User_meta_categories" WHERE "user_id"=${uid} AND "category_id"=${category[0]}`;
};

export const getUser_skills = async (uid) => {
  return await prisma.$queryRaw`SELECT uc."category_id",c."category" FROM "User_meta_categories" AS uc JOIN "Categories" c ON uc."category_id" = c."id" WHERE uc."user_id"=${uid}`;
};
export const delUser_skills = async (uid, category) => {
  return await prisma.User_meta_categories.deleteMany({
    where: {
      user_id: uid,
      category_id: category[0],
    },
  });
};
