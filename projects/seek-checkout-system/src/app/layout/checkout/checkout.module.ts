import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { JobAdsEffects } from "./../job-ads/effects/job-ads.effects";
import { reducers } from "./../job-ads/reducers";

import { CheckoutRoutingModule } from "./checkout-routing.module";
import { CheckoutComponent } from "./checkout.component";
import { JobAdsApiModule } from "job-ads-api";

@NgModule({
    imports: [
        CommonModule,
        CheckoutRoutingModule,
        StoreModule.forFeature("jobAds", reducers),
        EffectsModule.forFeature([JobAdsEffects]),
        JobAdsApiModule
    ],
    declarations: [CheckoutComponent]
})
export class CheckoutModule {}
