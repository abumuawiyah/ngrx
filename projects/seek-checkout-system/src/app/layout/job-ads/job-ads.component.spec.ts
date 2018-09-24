import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { JobAdsComponent } from "./job-ads.component";
import { DashboardRoutingModule } from "./job-ads-routing.module";

describe("DashboardComponent", () => {
    let component: JobAdsComponent;
    let fixture: ComponentFixture<JobAdsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JobAdsComponent],
            imports: [DashboardRoutingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JobAdsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
