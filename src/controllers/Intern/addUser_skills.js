import {
  addUserskill,
  checkif_user_added_category,
  getUser_skills,
  delUser_skills,
} from "../../model/Intern/User_meta_category.js";

export const getUser_skill = async (req, res) => {
  //get userid from session
  const uid = res.locals.uid;
  try {
    const getuser_skill = await getUser_skills(uid);

    return res.status(200).json({ data: { success: getuser_skill } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};

export const addUser_skill = async (req, res) => {
  const { category } = req.body;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const check = await checkif_user_added_category(uid, category);

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Alredy Added" } });

    const adduser_skill = await addUserskill(uid, category);
    if (!adduser_skill.userId)
      res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res.status(201).json({ data: { success: "Category/skill added" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};

export const delUser_skill = async (req, res) => {
  const { category } = req.body;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const check = await checkif_user_added_category(uid, category);

    const n_exist = check[0].count;
    if (n_exist == 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Not Added" } });

    const deluser_skills = await delUser_skills(uid, category);
    if (!deluser_skills.userId)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res
      .status(201)
      .json({ data: { success: "Category/skill deleted" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};
