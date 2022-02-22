import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const applyPost = async (req, res) => {
  const date = new Date();
  const { pid } = req.params;

  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  //check role
  // const get_role = await prisma.User.findUnique({
  //   where: {
  //     id: userid,
  //   },
  //   select: {
  //     role: true,
  //   },
  // });
  // if (get_role != "INTERN")
  //   return res.status(404).json({ err: "You Are Not Allowed In Here" });
  try {

    //checks if user applied to job post
    const checkifapplied = await prisma.Applicant.findMany({
      where: {
        userid: uid,
        postid: pid,
      },
    });
    if (checkifapplied[0].postid)
      return res.status(400).json({ err: "Alredy Applied" });
    const applytoPost = await prisma.Applicant.create({
      data: {
        userid: uid,
        postid: pid,
        createdAt: date,
      },
    });
    return res.status(201).json({ success: "Applied to job" });
  } catch (err) {
    return res.status(409).json(err.message);
  }
};
