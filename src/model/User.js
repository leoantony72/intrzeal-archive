import { prisma } from "../../client.js";

export const getrole = async (uid) => {
  return await prisma.$queryRaw`
    SELECT u.role FROM "Users" u WHERE u.id =${uid}
    `;
};
export const get_User_profile_intern = async (uid) => {
  return await prisma.$queryRaw`SELECT
  u.id,
  u.name,
  u.email,
  u.image,
  umi.personal_web,
  umi.github,
  umi.twitter,
  umi.linkedin,
  umi.other,
  umi.resume,
  categories
  FROM "Users" u
  LEFT JOIN "User_meta_interns" umi ON u.id=umi.user_id,
  LATERAL (
   SELECT coalesce(json_agg(c.*), '[]') AS categories
   FROM (
     SELECT c.id,c.category
     FROM "User_meta_categories" uc
     INNER JOIN "Categories" c ON uc."category_id" = c.id
     WHERE u.id = uc."user_id"
   ) AS c
 ) AS categories
 WHERE u.id =${uid};`;
};
export const get_User_profile_rec = async (uid) => {
  return await prisma.$queryRaw`SELECT
  u.id,
  u.name,
  u.email,
  u.image,
  umr.company,
  umr.website,
  umr.github,
  umr.twitter,
  umr.other,
  umr.linkedin,
  umr.employee,
  umr.country,
  categories
  FROM "Users" u
  LEFT JOIN "User_meta_recruiters" umr ON u.id=umr.user_id,
  LATERAL (
   SELECT coalesce(json_agg(c.*), '[]') AS categories
   FROM (
     SELECT c.id,c.category
     FROM "User_meta_categories" uc
     INNER JOIN "Categories" c ON uc."category_id" = c.id
     WHERE u.id = uc."user_id"
   ) AS c
 ) AS categories
 WHERE u.id =${uid};`;
};


