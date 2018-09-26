import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { JobAdsEffects } from "./effects/job-ads.effects";
import { reducers } from "./reducers";

import { DashboardRoutingModule } from "./job-ads-routing.module";
import { JobAdsComponent } from "./job-ads.component";

import { RouterModule } from "@angular/router";

import { ReactiveFormsModule } from "@angular/forms";
import { JobAdsApiModule } from "job-ads-api";
import { SeekContainerModule } from "../../shared/modules/seek-container/seek-container.module";
import { SeekUlComponent } from "../../shared/modules/seek-ul/seek-ul.component";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StoreModule.forFeature("jobAds", reducers),
        EffectsModule.forFeature([JobAdsEffects]),
        JobAdsApiModule,
        ReactiveFormsModule,
        SeekContainerModule
    ],
    declarations: [JobAdsComponent],
    exports: [JobAdsComponent],
    entryComponents: [SeekUlComponent]
})
export class JobAdsModule {}
