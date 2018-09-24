import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { DashboardEffects } from "./effects/job-ads.effects";
import { reducers } from "./reducers";

import { DashboardRoutingModule } from "./job-ads-routing.module";
import { JobAdsComponent } from "./job-ads.component";

import { RouterModule } from "@angular/router";

import { ReactiveFormsModule } from "@angular/forms";
import { JobAdsApiModule } from "job-ads-api";
import { AccordianModule, CardModule } from "../../shared";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        StoreModule.forFeature("dashboard", reducers),
        EffectsModule.forFeature([DashboardEffects]),
        JobAdsApiModule,
        ReactiveFormsModule,
        AccordianModule,
        CardModule
    ],
    declarations: [JobAdsComponent],
    exports: [JobAdsComponent],
    entryComponents: []
})
export class JobAdsModule {}
