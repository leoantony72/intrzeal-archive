import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const createPost = async (req, res) => {
  //Middleware to check if user is authenticated and user Roles(RECRUITER)
  //Middleware for validating user Input
  const { title, descriptions, job_type, salary, job_experience } = req.body;
  try {
    //get userid from cookies
    const userid = "ckzjhuolr0000j9tmrql0aj5p";
    //creates job_post in db
    const createPost = await prisma.Post.create({
      data: {
        userid: userid,
        title: title,
        descriptions: descriptions,
        job_type: job_type,
        salary: salary,
        job_experience: job_experience,
      },
    });

    return res.json({ data: createPost, db: get });
  } catch (err) {
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
