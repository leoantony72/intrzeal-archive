import {
  addUserskill,
  checkif_user_added_category,
  delUser_skills,
  getUser_skills,
} from "../../model/Intern/User_meta_category.js";

export class UserCategoryService {
  checkifSkillAdded = async ({ uid, category }) => {
    const check = await checkif_user_added_category(uid, category);
    return check;
  };

  getSkills = async ({ uid }) => {
    const getuser_skill = await getUser_skills(uid);
    return getuser_skill;
  };

  addSkills = async ({ uid, category }) => {
    const isSkillAdded = await this.checkifSkillAdded({
      uid: uid,
      category: category,
    });
    const n_exist = isSkillAdded[0].count;
    if (n_exist != 0) return { added: true };
    const adduser_skill = await addUserskill(uid, category);
    return { adduser_skill, added: false };
  };
  delSkills = async ({ uid, category }) => {
    const isSkillAdded = await this.checkifSkillAdded({
      uid: uid,
      category: category,
    });
    const n_exist = isSkillAdded[0].count;
    if (n_exist == 0) return { added: false };

    const deluser_skills = await delUser_skills(uid, category);
    return { added: true };
  };
}
