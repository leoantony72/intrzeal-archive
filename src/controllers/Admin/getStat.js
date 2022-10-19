import { MetricsService } from "../../services/Admin/MetricsService.js";

const MetricsServiceInstance = new MetricsService();
export const getStat = async (req, res) => {
  try {
    const getStats = await MetricsServiceInstance.stats();
    return res.status(200).json({
      status: "success",
      data: { user: getStats.user, post: getStats.post },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
