import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getCategory = async (req, res) => {
  try {
    const getCategory = await prisma.Category.findMany();
    return res.stats(200).json({ data: getCategory });
  } catch (err) {
    return res.status(400).json({ err: err });
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

    return res.status(200).json({ data: getCategory });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
