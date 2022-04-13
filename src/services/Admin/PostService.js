import { del_post } from "../../model/Admin/Post.js";

export class PostService {
  delPost = async ({pid}) => {
    const delPost = await del_post(pid);
    return delPost;
  };
}
