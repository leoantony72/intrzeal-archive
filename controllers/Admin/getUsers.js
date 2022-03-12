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
      });
      return res.json({ data: { success: getUser } });
    }
    const getUser = await prisma.User.findMany();

    return res.json({ data: { success: getUser } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
