import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  log: ["query"],
});

export class Post {
  //del post
  static del_post = async (pid) => {
    return await prisma.Post.delete({
      where: {
        id: pid,
      },
      select: {
        id: true,
      },
    });
  };

  //get stats
  static stat = async () => {
    return await prisma.$queryRaw`SELECT p.status,COUNT(p.status) AS posts FROM "Post" AS p GROUP BY p.status`;
  };

}
