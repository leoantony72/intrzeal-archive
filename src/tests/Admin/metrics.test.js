import { MetricsService } from "../../services/Admin/MetricsService";


const metricsInstance = new MetricsService();

describe("Admin : metrics",()=>{
    test("get user & post stats",async()=>{
        const get_metrics= await metricsInstance.stats();
        expect(get_metrics.user)
        expect(get_metrics.post)
    })
})