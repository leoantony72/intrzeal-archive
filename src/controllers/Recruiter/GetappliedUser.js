import { getApplied_User } from "../../model/Recruiter/Applicant.js";
import { postOwner } from "../../model/Recruiter/Post.js";

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  const uid = res.locals.uid;
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].user_id != uid)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    const getUsers = await getApplied_User(uid, pid, page, limit);

    return res.status(200).json({
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/recruiter/posts/${pid}/applicants?page=${
        page + 1
      }`,
      prev_page: `http://localhost:1500/api/recruiter/posts/${pid}/applicants?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: getUsers,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
