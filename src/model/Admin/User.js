import { prisma } from "../../../client.js";

export const getUser = async (page, limit) => {
  return await prisma.Users.findMany({
    select: {
      id: true,
      name: true,
      image: true,
      email: true,
      email_verified: true,
      role: true,
      status: true,
    },
    skip: page,
    take: limit,
  });
};

export const getUserById = async (uid) => {
  return await prisma.Users.findMany({
    where: {
      id: uid,
    },
    select: {
      id: true,
      name: true,
      image: true,
      email: true,
      email_verified: true,
      role: true,
      status: true,
    },
  });
};

export const getUserByRole = async (role, page, limit) => {
  return await prisma.Users.findMany({
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
    skip: page,
    take: limit,
  });
};

export const ban = async (uid) => {
  return await prisma.Users.update({
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

export const unBan = async (uid) => {
  return await prisma.Users.update({
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

export const userStats = async () => {
  return await prisma.$queryRaw`SELECT u.role,COUNT(u.id) AS USERS FROM "Users" AS u GROUP BY u.role`;
};
