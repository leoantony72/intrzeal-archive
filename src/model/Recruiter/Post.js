import { prisma } from "../../../client.js";

export const createPost = async ({
  id,
  uid,
  title,
  description,
  salary,
  job_experience,
  date,
  category,
}) => {
  return await prisma.$transaction(async (prisma) => {
    const createPost = await prisma.Posts.create({
      data: {
        id: id,
        user_id: uid,
        title: title,
        description: description,
        salary: salary,
        job_experience: job_experience,
        created_at: date,
      },
      select: {
        id: true,
      },
    });
    const postid = createPost.id;

    const addCategory = await prisma.Post_categories.createMany({
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

export const updatePost = async (
  pid,
  uid,
  title,
  description,
  salary,
  job_experience,
  status
) => {
  return await prisma.$queryRaw`UPDATE "Posts" SET title=${title},description=${description},salary=${salary},job_experience=${job_experience},status=${status} WHERE id =${pid} AND user_id=${uid} RETURNING id`;
};

export const updateStatus = async (pid, uid, status) => {
  return await prisma.$queryRaw`UPDATE "Posts" SET status=${status} WHERE id = ${pid} AND user_id=${uid} RETURNING id`;
};

export const deletePost = async (pid, uid) => {
  return await prisma.posts.deleteMany({
    where: {
      id: pid,
      user_id: uid,
    },
  });
};

export const postOwner = async (pid) => {
  return await prisma.Posts.findMany({
    where: {
      id: pid,
    },
    select: {
      user_id: true,
    },
  });
};
