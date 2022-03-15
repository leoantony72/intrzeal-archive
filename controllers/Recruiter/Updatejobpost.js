import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const updatePost = async (req, res) => {
  const { pid } = req.params;
  const { title, descriptions, salary, job_experience, status } = req.body;

  if (status == !"OPEN" || !"CLOSED")
    return res
      .status(400)
      .json({ data: { err: "Provide Status Open or Closed" } });
  try {
    const uid = "ckzrv2bh200004ftmeapovpbl";
    const updatePost = await prisma.post.updateMany({
      where: {
        id: pid,
        userid: uid,
      },
      data: {
        title: title,
        descriptions: descriptions,
        salary: salary,
        job_experience: job_experience,
        status: status,
      },
    });

    return res.status(200).json({ data: { success: "Job Post Updated" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};

export const updatePost_addcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  try {
    const check =
      await prisma.$queryRaw`SELECT COUNT(postid) FROM "Post_category" WHERE postid=${pid} AND category_id=${category[0]}`;

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res.status(400).json({ data: { err: "Category Alredy Added" } });
    const updatePost = await prisma.Post_category.create({
      data: {
        postid: pid,
        category_id: category[0],
      },
    });

    return res.status(200).json({ data: { success: "Category Added" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
export const updatePost_delcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  try {
    const check =
      await prisma.$queryRaw`SELECT COUNT(postid) FROM "Post_category" WHERE postid=${pid} AND category_id=${category[0]}`;

    const n_exist = check[0].count;
    if (n_exist != 1)
      return res.status(400).json({ data: { err: "Category Not Added" } });
    const updatePost = await prisma.Post_category.deleteMany({
      where: {
        postid: pid,
        category_id: category[0],
      },
    });

    return res.status(200).json({ data: { success: "Category deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
