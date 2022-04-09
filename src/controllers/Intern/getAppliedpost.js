import { getAppliedPost } from "../../model/Intern/Applicant.js";

export const get_applied_Post = async (req, res) => {
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  try {
    const uid = res.locals.uid;
    const get_applied_Post = await getAppliedPost(uid, page, limit);

    return res.status(200).json({
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/intern/posts?page=${page + 1}`,
      prev_page: `http://localhost:1500/api/intern/posts?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: get_applied_Post,
    });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
