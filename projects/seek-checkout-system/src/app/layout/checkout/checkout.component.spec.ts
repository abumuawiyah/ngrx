import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CheckoutComponent } from "./checkout.component";

import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { JobAdsEffects } from "./../job-ads/effects/job-ads.effects";
import { reducers } from "./../job-ads/reducers";

import { CheckoutRoutingModule } from "./checkout-routing.module";

import { JobAdsApiModule } from "job-ads-api";

describe("CheckoutComponent", () => {
    let component: CheckoutComponent;
    let fixture: ComponentFixture<CheckoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                CheckoutRoutingModule,
                StoreModule.forFeature("jobAds", reducers),
                EffectsModule.forFeature([JobAdsEffects]),
                JobAdsApiModule
            ],
            declarations: [CheckoutComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
