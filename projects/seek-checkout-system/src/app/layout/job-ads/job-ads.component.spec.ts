import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { JobAdsEffects } from "./effects/job-ads.effects";
import { reducers } from "./reducers";

import { JobAdsRoutingModule } from "./job-ads-routing.module";
import { JobAdsComponent } from "./job-ads.component";

import { RouterModule } from "@angular/router";

import { ReactiveFormsModule } from "@angular/forms";
import { JobAdsApiModule } from "job-ads-api";
import { SeekContainerModule } from "../../shared/modules/seek-container/seek-container.module";
import { SeekUlComponent } from "../../shared/modules/seek-ul/seek-ul.component";

describe("JobAdsComponent", () => {
    let component: JobAdsComponent;
    let fixture: ComponentFixture<JobAdsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                JobAdsRoutingModule,
                StoreModule.forFeature("jobAds", reducers),
                EffectsModule.forFeature([JobAdsEffects]),
                JobAdsApiModule,
                ReactiveFormsModule,
                SeekContainerModule
            ],
            declarations: [JobAdsComponent]
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
