import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getPost = async (req, res) => {
  try {
    const getPost = await prisma.post.findMany({
      where: {
        status: {
          equals: "OPEN",
        },
      },
    });

    return res.json({ data: getPost });
  } catch (err) {
    return res.status(409).json(err);
  }
};

export const getPost_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getPost = await prisma.post.findMany({
      where: {
        id: id,
      },
    });

    return res.json({ data: getPost });
  } catch (err) {
    return res.status(409).json(err);
  }
};
