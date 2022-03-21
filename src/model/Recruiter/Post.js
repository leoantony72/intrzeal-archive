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
        descriptions: description,
        salary: salary,
        job_experience: job_experience,
        createdat: date,
      },
      select: {
        id: true,
      },
    });
    const postid = createPost.id;
    console.log(postid);

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
  return await prisma.post.updateMany({
    where: {
      id: pid,
      userid: uid,
    },
    data: {
      title: title,
      descriptions: description,
      salary: salary,
      job_experience: job_experience,
      status: status,
    },
    select: {
      id: true,
    },
  });
};

export const updateStatus = async (pid, uid, status) => {
  return await prisma.Post.updateMany({
    where: {
      id: pid,
      userid: uid,
    },
    data: {
      status: status,
    },
    select: {
      id: true,
    },
  });
};

export const delPost = async (pid, uid) => {
  return await prisma.post.deleteMany({
    where: {
      id: pid,
      userid: uid,
    },
    select: {
      id: true,
    },
  });
};
