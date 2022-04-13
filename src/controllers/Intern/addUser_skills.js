import { UserCategoryService } from "../../services/Intern/UserCategoryService.js";

const UserCategoryServiceInstance = new UserCategoryService();

export const getUser_skill = async (req, res) => {
  //get userid from session
  const uid = res.locals.uid;
  try {
    const getSkills = await UserCategoryServiceInstance.getSkills({ uid: uid });
    return res.status(200).json({ status: "success", data: getSkills });
  } catch (err) {
    console.log(err.message);
    return res
      .status(400)
      .json({ status: "failed", err: "Something Went Wrong" });
  }
};

export const addUser_skill = async (req, res) => {
  const { category } = req.body;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const addSkill = await UserCategoryServiceInstance.addSkills({
      uid: uid,
      category: category,
    });

    if (addSkill.added === true)
      return res
        .status(400)
        .json({ status: "failed", err: "Category/skill Already Added" });

    if (!addSkill.adduser_skill.user_id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res
      .status(201)
      .json({ status: "success", data: "Category/skill added" });
  } catch (err) {
    console.log(err.message);
    return res
      .status(400)
      .json({ status: "failed", err: "Something Went Wrong" });
  }
};

export const delUser_skill = async (req, res) => {
  const { category } = req.body;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const delSkill = await UserCategoryServiceInstance.delSkills({
      uid: uid,
      category: category,
    });

    if (!delSkill.added === true)
      return res
        .status(400)
        .json({ status: "failed", err: "Category/skill Not Added" });

    // if (!deluser_skills.user_id)
    //   return res.status(400).json( { err: "Something Went Wrong" } );

    return res
      .status(201)
      .json({ status: "success", data: "Category/skill deleted" });
  } catch (err) {
    console.log(err.message);
    return res
      .status(400)
      .json({ status: "failed", err: "Something Went Wrong" });
  }
};
