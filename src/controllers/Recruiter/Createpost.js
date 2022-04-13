import { PostService } from "../../services/Recruiter/PostService.js";
const PostServiceInstance = new PostService();
export const createPost = async (req, res) => {
  const { title, description, salary, job_experience } = req.body;

  const { category } = req.body;
  const uid = res.locals.uid;
  try {
    const Create = await PostServiceInstance.createPost({
      uid: uid,
      title: title,
      description: description,
      salary: salary,
      job_experience: job_experience,
      category: category,
    });
    if (!Create.createPost.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res.status(201).json({ status: "success", data: "Job Post Added" });
  } catch (err) {
    console.log(err.message);
    return res
      .status(400)
      .json({ status: "failed", err: "Something Went Wrong" });
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
