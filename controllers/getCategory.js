import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getCategory = async (req, res) => {
  try {
    const getCategory = await prisma.Category.findMany();
    return res.json({ data: getCategory });
  } catch (err) {
    return res.status(409).json(err);
  }
};

export const getCategory_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await prisma.Category.findMany({
      where: {
        id: id,
      },
    });

    return res.json({ data: getCategory });
  } catch (err) {
    return res.status(409).json(err);
  }
};
