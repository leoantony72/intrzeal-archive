import { prisma } from "../../client.js";

export const get_Post = async () => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.salary,p.created_at,c.category,p.status
  FROM "Posts" p 
  JOIN "Post_categories" pc ON p.id = pc.post_id
  JOIN "Categories" c ON pc.category_id = c.id 
  WHERE p.status = 'OPEN'`;
};

export const get_Post_category = async (category) => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.salary,p.created_at,c.category,p.status
  FROM "Posts" p 
  JOIN "Post_categories" pc ON p.id = pc.post_id
  JOIN "Categories" c ON pc.category_id = c.id 
  WHERE p.status = 'OPEN' AND pc.category_id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
};
export const getPost_by_ID = async (pid) => {
  return await prisma.$queryRaw`SELECT p.id,p.user_id,p.title,p.salary,p.created_at,json_agg(c.*) AS categories,p.status FROM "Posts" p 
  JOIN "Post_categories" pc ON p.id = pc.post_id 
  JOIN "Categories" c ON pc.category_id = c.id 
  WHERE p.id =${pid} GROUP BY p.id;`;
};
