import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Post_category {
  static addCategory = async (postid, category) => {
    return await prisma.Post_category.createMany({
      data: [
        { postid: postid, category_id: category[0] },
        { postid: postid, category_id: category[1] || category[0] },
        { postid: postid, category_id: category[2] || category[0] },
        { postid: postid, category_id: category[3] || category[0] },
        { postid: postid, category_id: category[4] || category[0] },
      ],
      skipDuplicates: true,
      select: {
        postid: true,
      },
    });
  };
  static checkif_category_added = async (pid, category) => {
    return await prisma.$queryRaw`SELECT COUNT(postid) FROM "Post_category" WHERE postid=${pid} AND category_id=${category[0]}`;
  };
  static add_category = async(pid, category) => {
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

  static delCategory = async (pid, category) => {
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
}
