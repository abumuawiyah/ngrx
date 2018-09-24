import { TestBed, inject } from "@angular/core/testing";

import { JobAdsApiService } from "./job-ads-api.service";

describe("JobAdsApiService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [JobAdsApiService]
        });
    });

    it("should be created", inject(
        [JobAdsApiService],
        (service: JobAdsApiService) => {
            expect(service).toBeTruthy();
        }
    ));
});
