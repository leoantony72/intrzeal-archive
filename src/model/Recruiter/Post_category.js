import { prisma } from "../../../client.js";

export const checkif_category_added = async (pid, category) => {
  return await prisma.$queryRaw`SELECT COUNT(post_id) FROM "Post_category" WHERE post_id=${pid} AND category_id=${category[0]}`;
};
export const add_category = async (pid, category) => {
  return await prisma.$queryRaw`INSERT INTO "Post_category"(post_id,category_id)VALUES(${pid},${category[0]}) RETURNING post_id`;
};

export const delCategory = async (pid, category) => {
  return await prisma.$queryRaw`DELETE FROM "Post_category" WHERE post_id =${pid} AND category_id =${category[0]} RETURNING post_id`;
};
