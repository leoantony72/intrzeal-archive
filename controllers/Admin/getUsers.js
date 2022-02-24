import pkg from "@prisma/client";
const { PrismaClient, PrismaClientValidationError } = pkg;
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  try {
    const getUser = await prisma.User.findMany({});

    return res.json({ data: getUser });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
