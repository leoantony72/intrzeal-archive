import pkg from "@prisma/client";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const applyPost = async (req, res) => {
  const date = new Date();
  const { pid } = req.params;
  const { description } = req.body;

  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    //checks if user applied to job post
    const checkifapplied = await prisma.Applicant.findMany({
      where: {
        userid: uid,
        postid: pid,
      },
    });
    // console.log(checkifapplied);
    if (checkifapplied[0]) {
      return res.status(400).json({ err: "Alredy Applied" });
    }

    const applytoPost = await prisma.Applicant.create({
      data: {
        userid: uid,
        postid: pid,
        description: description,
        createdAt: date,
      },
    });
    return res.status(201).json({ success: "Applied to job" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
