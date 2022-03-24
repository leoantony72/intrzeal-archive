import { prisma } from "../../client.js";

export const get_Post = async () => {
  return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
  FROM "Post" p 
  JOIN "Post_category" pc ON p.id = pc.post_id
  JOIN "Category" c ON pc.category_id = c.id 
  WHERE p.status = 'OPEN'`;
};

export const get_Post_category = async (category) => {
  return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
  FROM "Post" p 
  JOIN "Post_category" pc ON p.id = pc.post_id
  JOIN "Category" c ON pc.category_id = c.id 
  WHERE p.status = 'OPEN' AND pc.category_id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
};
export const getPost_by_ID = async (pid) => {
  return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,json_agg(c.*) AS category,p.status FROM "Post" p 
  JOIN "Post_category" pc ON p.id = pc.post_id 
  JOIN "Category" c ON pc.category_id = c.id 
  WHERE p.id =${pid} GROUP BY p.id;`;
};
