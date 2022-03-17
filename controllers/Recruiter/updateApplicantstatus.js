import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const updateApplicantstatus = async (req, res) => {
  const { pid } = req.query;
  const uid = "ckzrv2bh200004ftmeapovpbl";
  //check if user == user who created the post
  try {
    const updatePost = await prisma.Applicant.updateMany({
      where: {
        postid: pid,
        userid: uid,
      },
      data: {
        status: "SELECTED",
      },
    });

    //send the user a Email with the link to chat with the recruiter
    return res
      .status(200)
      .json({ data: { success: `User Selected For The Job` } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};


