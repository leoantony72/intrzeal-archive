import { prisma } from "../../../client.js";

export const checkif_category_added = async (pid, category) => {
  return await prisma.$queryRaw`SELECT COUNT(postid) FROM "Post_category" WHERE postid=${pid} AND category_id=${category[0]}`;
};
export const add_category = async (pid, category) => {
  return await prisma.Post_category.create({
    data: {
      postid: pid,
      category_id: category[0],
    },
    select: {
      postid: true,
    },
  });
};

export const delCategory = async (pid, category) => {
  return await prisma.Post_category.deleteMany({
    where: {
      postid: pid,
      category_id: category[0],
    },
    select: {
      postid: true,
    },
  });
};
