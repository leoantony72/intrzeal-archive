import { prisma } from "../../client.js";

export const getrole = async (uid) => {
  return await prisma.$queryRaw`
    SELECT u.role FROM "User" u WHERE u.id =${uid}
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
  FROM "User" u
  LEFT JOIN "User_meta_intern" umi ON u.id=umi.user_id,
  LATERAL (
   SELECT coalesce(json_agg(c.*), '[]') AS categories
   FROM (
     SELECT c.id,c.category
     FROM "User_meta_category" uc
     INNER JOIN "Category" c ON uc."categoryId" = c.id
     WHERE u.id = uc."userId"
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
  FROM "User" u
  LEFT JOIN "User_meta_recruiter" umr ON u.id=umr.user_id,
  LATERAL (
   SELECT coalesce(json_agg(c.*), '[]') AS categories
   FROM (
     SELECT c.id,c.category
     FROM "User_meta_category" uc
     INNER JOIN "Category" c ON uc."categoryId" = c.id
     WHERE u.id = uc."userId"
   ) AS c
 ) AS categories
 WHERE u.id =${uid};`;
};

`select
p.id,
p.userid,
p.title,
--p.descriptions,
--p.salary,
p.createdat,
categories
from "Post" p,
lateral (
  select coalesce(json_agg(category), '[]') as categories
  from (
    select category
    from "Post_category" pc
    left join "Category" c ON pc.category_id = c.id
    where p.id = pc.postid
  ) as _
) as categories;`;
