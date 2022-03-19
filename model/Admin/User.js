import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class User {

  //get all users
  static getUser = async () => {
    return await prisma.User.findMany({
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        emailVerified: true,
        role: true,
        status: true,
      },
    });
  };
  static getUser_by_ID = async (uid) => {
    return await prisma.User.findMany({
      where: {
        id: uid,
      },
      select: {
        id: true,
        name: true,
        image: true,
        email: true,
        emailVerified: true,
        role: true,
        status: true,
      },
    });
  };
  //get User by role
  static getUser_by_role = async (role) => {
    return await prisma.User.findMany({
      where: {
        role: role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      },
    });
  };

  static ban = async (uid) => {
    return await prisma.User.update({
      where: {
        id: uid,
      },
      data: {
        status: "BANNED",
      },
      select: {
        id: true,
      },
    });
  };
  static unban = async(uid) => {
    return await prisma.User.update({
      where: {
        id: uid,
      },
      data: {
        status: "ACTIVE",
      },
      select: {
        id: true,
      },
    });
  };

  static stat = async() => {
    return await prisma.$queryRaw`SELECT u.role,COUNT(u.id) AS USERS FROM "User" AS u GROUP BY u.role`;
  };
}
