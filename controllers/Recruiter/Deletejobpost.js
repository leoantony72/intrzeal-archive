import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const updatePost = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    console.log(updatePost.code);

    return res.json({ data: deletePost });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(400).json({ err: "Job post not found" });
    }
    return res.status(409).json(err);
  }
};
