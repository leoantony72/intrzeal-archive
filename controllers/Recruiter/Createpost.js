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
      console.log(createPost);
      const postid = createPost.id;
      const addCategory = await prisma.Post_category.create({
        data: {
          postid: postid,
          category_id: category,
        },
      });
      return { createPost, addCategory };
    });
    console.log(result);

    return res.json({ success: "Job Post Added" });
  } catch (err) {
    console.log(err.message);
    return res.status(409).json(err);
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
