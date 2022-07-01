import { PostService } from "../../services/Recruiter/PostService.js";
import { ApplicantService } from "../../services/Intern/ApplicantService";

const applicantInstance = new ApplicantService();
const post = {
  uid: "xx1",
  title: "title",
  description: "description",
  salary: 3234,
  date: new Date(),
  job_experience: 3,
  category: ["testcategory2", "testcategory1","testcategory3"],
};

const pid = "456post";
const uid = "xx1";

const PostServiceInstance = new PostService();
describe("Recruiter : post", () => {
  test("Create New Post", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    expect(createPost.createPost.id);
  });
  test("Create New Post : Multiple Category", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    expect(createPost.createPost.id);
  });

  test("Delete post : Owner true", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    const pid = createPost.createPost.id;
    const deletePost = await PostServiceInstance.deletePost({
      pid: pid,
      uid: "xx1",
    });
    expect(deletePost.owner == true);
  });
  test("Delete post : Owner false", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    const pid = createPost.createPost.id;
    const deletePost = await PostServiceInstance.deletePost({
      pid: pid,
      uid: "xx2",
    });
    expect(deletePost.owner == false);
  });

  test("Update Post : Owner true", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    const pid = createPost.createPost.id;

    const post2 = {
      pid: pid,
      uid: "xx1",
      title: "title 2",
      description: "description 2",
      salary: 3234,
      date: new Date(),
      job_experience: 3,
      status: "OPEN",
      category: ["testcategory2", "testcategory1"],
    };
    const updatePost = await PostServiceInstance.updatePosts(post2);
    expect(updatePost.owner == true);
    expect(updatePost.posts[0].id);
  });
  test("Update Post : Owner false", async () => {
    const createPost = await PostServiceInstance.createPost(post);
    const pid = createPost.createPost.id;

    const post2 = {
      pid: pid,
      uid: "xx2",
      title: "title 2",
      description: "description 2",
      salary: 3234,
      date: new Date(),
      job_experience: 3,
      status: "OPEN",
      category: ["testcategory2", "testcategory1"],
    };
    const updatePost = await PostServiceInstance.updatePosts(post2);
    expect(updatePost.owner == false);
  });

  test("Add Categories : Owner false", async () => {
    const category = "testcategory3";
    const addCategory = await PostServiceInstance.addCategories({
      pid: pid,
      uid: "xx2",
      category: [category],
    });

    expect(addCategory.owner == false);
  });
  test("Add Categories : Category Not Added", async () => {
    const category = "testcategory3";
    const addCategory = await PostServiceInstance.addCategories({
      pid: pid,
      uid: uid,
      category: [category],
    });

    expect(addCategory.owner == true);
    expect(addCategory.added == false);
    expect(addCategory.category[0].post_id == pid);
  });
  test("Add Categories : Category Not Added : Multiple Category", async () => {
    const category = ["testcategory3","testcategory1"];
    const addCategory = await PostServiceInstance.addCategories({
      pid: "89post",
      uid: uid,
      category: category,
    });

    expect(addCategory.owner == true);
    expect(addCategory.added == false);
    expect(addCategory.category[0].post_id == pid);
  });
  test("Add Categories : Category Added", async () => {
    const category = "testcategory3";
    const addCategory = await PostServiceInstance.addCategories({
      pid: pid,
      uid: uid,
      category: [category],
    });

    expect(addCategory.owner == true);
    expect(addCategory.added == true);
  });

  test("Is Category Added", async () => {
    const category = "testcategory3";
    const isCategoryAdded = await PostServiceInstance.checkIfCategoryAdded({
      pid: pid,
      category: category,
    });
    expect(isCategoryAdded.added == true);
  });

  test("Delete Category : Category Alredy Added", async () => {
    const category = "testcategory3";
    const addCategory = await PostServiceInstance.addCategories({
      pid: "89post",
      uid: "xx1",
      category: [category],
    });

    const deleteCategory = await PostServiceInstance.deleteCategory({
      pid: "89post",
      uid: "xx1",
      category: [category],
    });
    expect(deleteCategory.added == true)
    expect(deleteCategory.owner == true)

    expect(deleteCategory.delcategory[0].post_id)
  });
  test("Delete Category : Not Owner", async () => {
    const category = "testcategory3";
    const deleteCategory = await PostServiceInstance.deleteCategory({
      pid: pid,
      uid: "xx3",
      category: category,
    });
    expect(deleteCategory.owner == false)
  });
  test("Delete Category : Category Not Added", async () => {
    const category = "testcategory2";
    const deleteCategory = await PostServiceInstance.deleteCategory({
      pid: pid,
      uid: uid,
      category: category,
    });
    expect(deleteCategory.added == false)
    expect(deleteCategory.owner == true)
  });
  test("Update Job Status : Owner true", async () => {
    const uid = "xx3";
    const desc = "testing apply to post";
    const apply = await applicantInstance.applyToPost({
      uid: uid,
      pid: pid,
      description: desc,
    });

    const updateStatus = await PostServiceInstance.updateStatus({
      pid: pid,
      uid: "xx1",
      status: "CLOSED",
    });
    expect(updateStatus.owner == true);
    expect(updateStatus.postStatus[0].id);

    const application = await applicantInstance.deleteApplication({
      uid: uid,
      pid: pid,
    });
    const reverStatus = await PostServiceInstance.updateStatus({
      pid: pid,
      uid: "xx1",
      status: "OPEN",
    });
  });
  test("Update Job Status : Owner false", async () => {
    const uid = "xx3";

    const updateStatus = await PostServiceInstance.updateStatus({
      pid: pid,
      uid: "xx2",
      status: "CLOSED",
    });
    expect(updateStatus.owner == false);
  });
});
