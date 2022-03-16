import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getUsers = async (req, res) => {
  const { role } = req.query;
  try {
    if (role) {
      if (role !== "INTERN")
        if (role !== "RECRUITER")
          return res.status(400).json({ data: { err: "Role Not Found" } });
      const getUser = await prisma.User.findMany({
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
      return res.json({ data: { success: getUser } });
    }
    const getUser = await prisma.User.findMany({
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

    return res.json({ data: { success: getUser } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
export const getUsersbyID = async (req, res) => {
  const { uid } = req.query;
  try {
    const getUser = await prisma.User.findMany({
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

    return res.json({ data: { success: getUser } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
