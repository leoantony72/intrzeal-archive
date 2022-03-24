import { prisma } from "../../../client.js";

export const create_Post = async (
  uid,
  title,
  description,
  salary,
  job_experience,
  date,
  category
) => {
  return await prisma.$transaction(async (prisma) => {
    const createPost = await prisma.Post.create({
      data: {
        userid: uid,
        title: title,
        description: description,
        salary: salary,
        job_experience: job_experience,
        createdat: date,
      },
      select: {
        id: true,
      },
    });
    const postid = createPost.id;

    const addCategory = await prisma.Post_category.createMany({
      data: [
        { post_id: postid, category_id: category[0] },
        { post_id: postid, category_id: category[1] || category[0] },
        { post_id: postid, category_id: category[3] || category[0] },
        { post_id: postid, category_id: category[4] || category[0] },
      ],
      skipDuplicates: true,
    });
    return { createPost, addCategory };
  });
};

export const update_Post = async (
  pid,
  uid,
  title,
  description,
  salary,
  job_experience,
  status
) => {
  return await prisma.$queryRaw`UPDATE "Post" SET title=${title},description=${description},salary=${salary},job_experience=${job_experience},status=${status} WHERE id =${pid} AND userid=${uid} RETURNING id`;
};

export const updateStatus = async (pid, uid, status) => {
  return await prisma.$queryRaw`UPDATE "Post" SET status=${status} WHERE id = ${pid} AND userid=${uid} RETURNING id`;
};

export const delPost = async (pid, uid) => {
  return await prisma.post.deleteMany({
    where: {
      id: pid,
      userid: uid,
    },
  });
};

export const postOwner = async (pid) => {
  return await prisma.Post.findMany({
    where: {
      id: pid,
    },
    select: {
      userid: true,
    },
  });
};
