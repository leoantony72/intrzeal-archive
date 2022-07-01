import { prisma } from "../../../client.js";

export const getPost = async (page, limit) => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.salary,p.created_at,categories,p.status
  FROM "Posts" p ,
  LATERAL (
    SELECT coalesce(json_agg(c.*), '[]') AS categories
    FROM (
      SELECT c.id,c.category
      FROM "Post_categories" pc
      INNER JOIN "Categories" c ON pc."category_id" = c.id
      WHERE p.id = pc."post_id"
    ) AS c
  ) AS categories
  WHERE p.status = 'OPEN' ORDER BY p.created_at DESC LIMIT ${limit} OFFSET ${page};`;
};


export const getPostByCategory = async (category, page, limit) => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.salary,p.created_at,c.category,p.status,categories 
  FROM "Posts" p 
  JOIN "Post_categories" pc ON p.id = pc.post_id
  JOIN "Categories" c ON pc.category_id = c.id ,
  LATERAL (
    SELECT coalesce(json_agg(c.*), '[]') AS categories
    FROM (
      SELECT c.id,c.category
      FROM "Post_categories" pc
      INNER JOIN "Categories" c ON pc."category_id" = c.id
      WHERE p.id = pc."post_id"
    ) AS c
  ) AS categories
  WHERE p.status = 'OPEN' AND pc.category_id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})
  ORDER BY p.created_at DESC LIMIT ${limit} OFFSET ${page};`;
};


export const getPostByID = async (pid) => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.description,p.salary,p.created_at,p.status,categories FROM "Posts" p ,
  LATERAL (
    SELECT coalesce(json_agg(c.*), '[]') AS categories
    FROM (
      SELECT c.id,c.category
      FROM "Post_categories" pc
      INNER JOIN "Categories" c ON pc."category_id" = c.id
      WHERE p.id = pc."post_id"
    ) AS c
  ) AS categories
  WHERE p.id=${pid};`;
};
