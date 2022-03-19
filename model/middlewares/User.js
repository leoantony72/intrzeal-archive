import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class User {
  //get all users
  static checkifUserexist = async (uid) => {
    return await prisma.User.count({
      where: {
        id: uid,
      },
    });
  };
}
