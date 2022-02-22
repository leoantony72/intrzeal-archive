import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const delete_applied_Post = async (req, res) => {
  const { pid } = req.params;

  try {
    const delete_applied_Post = await prisma.post.delete({
      where: {
        id: pid,
      },
    });

    return res.json({ success: "application deleted" });
  } catch (err) {
    if (err.code === "P2025") {
      return res.status(400).json({ err: "Job post not found" });
    }
    return res.status(409).json(err);
  }
};
