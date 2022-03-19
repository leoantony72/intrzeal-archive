import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  log: ["query"],
});

export class Post {
  //del post
  static checkifpostexist = async (pid) => {
    return await prisma.Post.count({
      where: {
        id: pid,
      },
    });
  };
}
