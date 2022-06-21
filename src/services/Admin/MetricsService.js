import { userStats } from "../../model/Admin/User.js";
import { postStats } from "../../model/Admin/Post.js";

export class MetricsService {
  stats = async () => {
    const user = await userStats();
    const post = await postStats();

    return { user, post };
  };
}
