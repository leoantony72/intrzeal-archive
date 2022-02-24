import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const delete_applied_Post = async (req, res) => {
  const { pid } = req.params;
  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const delete_applied_Post = await prisma.Applicant.deleteMany({
      where:{
          postid: pid,
          userid: uid,
        },
    });

    return res.status(200).json({ success: "application deleted" });
  } catch (err) {
    return res.status(400).json({err:err.message});
  }
};
