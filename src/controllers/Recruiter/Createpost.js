import { create_Post } from "../../model/Recruiter/Post.js";

export const createPost = async (req, res) => {
  const { title, description, salary, job_experience } = req.body;

  const { category } = req.body;
  const uid = res.locals.uid;
  try {
    const date = new Date();
    const result = await create_Post(
      uid,
      title,
      description,
      salary,
      job_experience,
      date,
      category
    );
    if (!result.createPost.id)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res.status(201).json({ data: { success: "Job Post Added" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
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
