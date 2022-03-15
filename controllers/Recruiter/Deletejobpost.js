import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const delPost = await prisma.post.deleteMany({
      where: {
        id: pid,
        userid: uid,
      },
    });

    return res.status(200).json({ data: { success: "Job Post Deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
