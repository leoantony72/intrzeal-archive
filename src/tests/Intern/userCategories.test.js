import { UserCategoryService } from "../../services/Intern/UserCategoryService";

const usercategoryInstance = new UserCategoryService();

describe("Intern : user Category", () => {
  const uid = "xx1";
  const category = ["testcategory1"];

  test("add skills : Added false", async () => {
    const add_skills = await usercategoryInstance.addSkills({
      uid: uid,
      category: category,
    });
    expect(add_skills.added == false);
    expect(add_skills.userSkill.user_id);
  });
  test("add skills : Added true", async () => {
    const add_skills = await usercategoryInstance.addSkills({
      uid: uid,
      category: category,
    });
    expect(add_skills.added == true);
  });

  test("getSkills", async () => {
    const skills = await usercategoryInstance.getSkills({ uid: uid });
    expect(skills.category_id);
    expect(skills.category);
  });

  test("check if skill is already added", async () => {
    const skills = await usercategoryInstance.isSkillAdded({
      uid: uid,
      category: category,
    });
    expect(skills.count);
  });

  test("delete skills : Added true", async () => {
    const delete_skill = await usercategoryInstance.deleteSkills({
      uid: uid,
      category: category,
    });
    expect(delete_skill.added == true);
  });
  test("delete skills : Added false", async () => {
    const delete_skill = await usercategoryInstance.deleteSkills({
      uid: uid,
      category: category,
    });
    expect(delete_skill.added == false);
  });
});
