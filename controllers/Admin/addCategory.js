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

    return res.json({ data:{success: "Category Added"} });
  } catch (err) {
    return res.status(400).json({data:{err:err.message}});
  }
};
