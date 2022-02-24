import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  const { title, descriptions, salary, job_experience } = req.body;

  const { category } = req.body;
  try {
    const userid = "ckzrv2bh200004ftmeapovpbl";
    const date = new Date();
    const result = await prisma.$transaction(async (prisma) => {
      const createPost = await prisma.Post.create({
        data: {
          userid: userid,
          title: title,
          descriptions: descriptions,
          salary: salary,
          job_experience: job_experience,
          createdat: date,
        },
      });
      const postid = createPost.id;
      const addCategory = await prisma.Post_category.create({
        data: {
          postid: postid,
          category_id: category,
        },
      });
      return { createPost, addCategory };
    });

    return res.status(201).json({ success: "Job Post Added" });
  } catch (err) {
    return res.status(400).json({err:err});
  }
};

//const get = await prisma.Post.findMany();

// const getUser = await prisma.User.findMany();
// const createUser = await prisma.User.create({
//   data: {
//     name: "Leo",
//     email: "test@gmail.com",
//   },
// });
// const deleteUser = await prisma.user.delete({
//   where: {
//     email: 'test@gmail.com',
//   },
// })
