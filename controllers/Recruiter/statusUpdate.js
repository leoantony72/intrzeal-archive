import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const updateJob_Status = async (req, res) => {
  const { pid } = req.params;
  const { status } = req.query;

  if (status !== "OPEN")
    if (status !== "CLOSED")
        return res.status(400).json({err:"Status Options [OPEN,CLOSED] Are Only Allowed" })
      try {
        const uid = "ckzrv2bh200004ftmeapovpbl";
        const updatePost = await prisma.Post.updateMany({
          where: {
            id: pid,
            userid: uid,
          },
          data: {
            status: status,
          },
        });

        return res.status(200).json({ data: { success: "Status Updated to "+status } });
      } catch (err) {
        return res.status(400).json({ data: { err: err.message } });
      }
};
