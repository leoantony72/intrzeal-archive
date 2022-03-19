import pkg from "@prisma/client";
import { Post_category } from "./Post_category.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export class Post {
  static createPost = async (
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
          userid: true,
        },
      });
      const postid = createPost.id;

      const addCategory = await Post_category.addCategory(postid, category);
      return { createPost, addCategory };
    });
  };

  static delPost = async (pid, uid) => {
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

  static updateStatus = async(pid, uid, status) => {
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
  static updatePost = async (
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


}
