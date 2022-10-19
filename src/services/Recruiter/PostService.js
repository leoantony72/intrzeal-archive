import {
  createPost as insertPost,
  deletePost as delPost,
  postOwner,
  updateStatus,
  updatePost,
} from "../../model/Recruiter/Post.js";
import { Postid } from "../../utils/id/generateId.js";

import {
  addCategory,
  isCategoryAdded,
  deleteCategory as delCategory,
} from "../../model/Recruiter/Post_category.js";

export class PostService {
  createPost = async ({
    uid,
    title,
    description,
    salary,
    job_experience,
    category,
  }) => {
    const date = new Date();
    const pid = await Postid();
    const result = await insertPost({
      id: pid,
      uid: uid,
      title: title,
      description: description,
      salary: salary,
      job_experience: job_experience,
      date: date,
      category: category,
    });
    return result;
  };

  Owner = async ({ pid }) => {
    return await postOwner(pid);
  };

  deletePost = async ({ pid, uid }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    await delPost(pid, uid);
    return { owner: true };
  };

  updatePosts = async ({
    pid,
    uid,
    title,
    description,
    salary,
    job_experience,
    status,
  }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const posts = await updatePost(
      pid,
      uid,
      title,
      description,
      salary,
      job_experience,
      status
    );

    return { posts, owner: true };
  };

  checkIfCategoryAdded = async ({ pid, category }) => {
    const isAdded = await isCategoryAdded(pid, category);
    if (isAdded[0].count == 0) return { added: false };
    return { added: true };
  };

  addCategories = async ({ pid, uid, category }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const isCategoryAdded = await this.checkIfCategoryAdded({
      pid: pid,
      category: category,
    });

    if (isCategoryAdded.added == true) return { added: true, owner: true };

    const insertCategory = await addCategory(pid, category);
    return { category: insertCategory, added: false, owner: true };
  };

  deleteCategory = async ({ pid, uid, category }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const isCategoryAdded = await this.checkIfCategoryAdded({
      pid: pid,
      category: category,
    });

    if (isCategoryAdded.added == false) return { added: false, owner: true };

    const delcategory = await delCategory(pid, category);
    return { delcategory, added: true, owner: true };
  };

  updateStatus = async ({ pid, uid, status }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const postStatus = await updateStatus(pid, uid, status);
    return { postStatus, owner: true };
  };
}
