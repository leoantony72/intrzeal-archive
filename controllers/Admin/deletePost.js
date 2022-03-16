import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const deletePost = async (req, res) => {
  const { pid } = req.query;

  try {
    const delPost = await prisma.Post.delete({
      where: {
        id: pid,
      },
    });

    return res.status(200).json({ data: { success: "Job Post Deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
