import { p_stat } from "../../model/Admin/Post.js";
import { u_stat } from "../../model/Admin/User.js";

export const getStat = async (req, res) => {
  try {
    const user_stats = await u_stat();
    const post_stats = await p_stat();
    return res
      .status(200)
      .json({ success: { user: user_stats, post: post_stats } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ err: err });
  }
};
