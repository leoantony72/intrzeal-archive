import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, descriptions, job_type, salary, job_experience, status } =
    req.body;

  if (status == !"OPEN" || !"CLOSED")
    return res.status(400).json({ err: "Provide Status Open or Closed" });
  try {
    const updatePost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        descriptions: descriptions,
        salary: salary,
        job_experience: job_experience,
        status: status,
      },
    });

    return res.json({success:"Job Post Updated"});
  } catch (err) {
    return res.status(409).json(err);
  }
};
