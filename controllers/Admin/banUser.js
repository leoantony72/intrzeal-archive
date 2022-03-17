import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const banUsers = async (req, res) => {
  const { uid } = req.query;
  try {
    const banUser = await prisma.User.update({
      where: {
        id: uid,
      },
      data: {
        status: "BANNED",
      },
    });

    return res.json({ data: { success: "User :" + uid + " Banned" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
export const unbanUsers = async (req, res) => {
  const { uid } = req.query;
  try {
    const banUser = await prisma.User.update({
      where: {
        id: uid,
      },
      data: {
        status: "ACTIVE",
      },
    });

    return res.json({ data: { success: "User :" + uid + " Unbanned" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
