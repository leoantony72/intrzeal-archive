import {
  create_Post,
  delPost,
  postOwner,
  updateStatus,
  update_Post,
} from "../../model/Recruiter/Post.js";
import { Postid } from "../../utils/id/generateId.js";

import {
  add_category,
  checkif_category_added,
  delCategory,
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
    const result = await create_Post({
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

  updatePost = async ({
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

    const updatePosts = await update_Post(
      pid,
      uid,
      title,
      description,
      salary,
      job_experience,
      status
    );

    return { updatePosts, owner: true };
  };

  checkifCategoryAdded = async ({ pid, category }) => {
    return await checkif_category_added(pid, category);
  };

  addCategory = async ({ pid, uid, category }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const isCategoryAdded = await this.checkifCategoryAdded({
      pid: pid,
      category: category,
    });

    const n_exist = isCategoryAdded[0].count;
    if (n_exist != 0) return { added: true, owner: true };

    const addCategory = await add_category(pid, category);
    return { addCategory, added: false, owner: true };
  };

  delCategory = async ({ pid, uid, category }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const isCategoryAdded = await this.checkifCategoryAdded({
      pid: pid,
      category: category,
    });

    const n_exist = isCategoryAdded[0].count;
    if (n_exist != 1) return { added: false, owner: true };

    const del_category = await delCategory(pid, category);
    return { del_category, added: true, owner: true };
  };

  updateStatus = async ({ pid, uid, status }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };

    const update_Status = await updateStatus(pid, uid, status);
    return { update_Status, owner: true };
  };
}
