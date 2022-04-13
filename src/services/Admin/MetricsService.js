import { u_stat} from "../../model/Admin/User.js";
import { p_stat } from "../../model/Admin/Post.js";


export class MetricsService {
    stats = async() =>{
        const user_stats = await u_stat();
        const post_stats = await p_stat();

        return {user_stats,post_stats}
    }
}