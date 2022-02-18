import pkg from "@prisma/client";
const { PrismaClient, PrismaClientValidationError } = pkg;
const prisma = new PrismaClient();

export const addCategory = async (req, res) => {
  const { category } = req.body;

  try {
      const createPost = await prisma.Category.create({
        data: {
          category: category,
        },
      });

    return res.json({ success: "Category Added" });
  } catch (err) {
    console.log(err.message);
    return res.status(409).json(err);
  }
};
