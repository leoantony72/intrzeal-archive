import { ApplicantService } from "../../services/Intern/ApplicantService.js";
const ApplicantServiceInstance = new ApplicantService();

export const get_applied_Post = async (req, res) => {
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  const uid = res.locals.uid;
  try {
    const getAppliedPost = await ApplicantServiceInstance.getAppliedPosts({
      uid: uid,
      page: page,
      limit: limit,
    });

    return res.status(200).json({
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/intern/posts?page=${page + 1}`,
      prev_page: `http://localhost:1500/api/intern/posts?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: getAppliedPost,
    });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
