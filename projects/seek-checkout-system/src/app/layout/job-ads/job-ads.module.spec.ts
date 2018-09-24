import { JobAdsModule } from "./job-ads.module";

describe("DashboardModule", () => {
    let dashboardModule: JobAdsModule;

    beforeEach(() => {
        dashboardModule = new JobAdsModule();
    });

    it("should create an instance", () => {
        expect(dashboardModule).toBeTruthy();
    });
});
