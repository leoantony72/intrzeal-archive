import { User_meta_category } from "../../model/Intern/User_meta_category.js";

export const getUser_skill = async (req, res) => {
  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const getuser_skill = await User_meta_category.getUser_skills(uid);

    return res.status(201).json({ data: { success: getuser_skill } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};

export const addUser_skill = async (req, res) => {
  const { category } = req.body;
  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const check = await User_meta_category.checkif_user_added_category(
      uid,
      category
    );
    console.log(check);

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Alredy Added" } });

    const adduser_skill = await User_meta_category.addUserskill(uid, category);
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
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const check = await User_meta_category.checkif_user_added_category(
      uid,
      category
    );

    const n_exist = check[0].count;
    if (n_exist == 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Not Added" } });

    const deluser_skill = await User_meta_category.delUser_skill(uid, category);
    if (!delUser_skill.userId)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res
      .status(201)
      .json({ data: { success: "Category/skill deleted" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};
