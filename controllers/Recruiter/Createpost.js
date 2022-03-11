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

      const addCategory = await prisma.Post_category.createMany({
        data: [
          { postid: postid, category_id: category[0] },
          { postid: postid, category_id: category[1] || category[0] },
          { postid: postid, category_id: category[2] || category[0] },
          { postid: postid, category_id: category[3] || category[0] },
          { postid: postid, category_id: category[4] || category[0] },
        ],
        skipDuplicates: true,
      });
      return { createPost, addCategory };
    });

    return res.status(201).json({ data:{success: "Job Post Added"} });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data:{err: "Something Went Wrong"} });
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
