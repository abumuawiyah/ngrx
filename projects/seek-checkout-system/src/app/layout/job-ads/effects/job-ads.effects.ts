import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/exhaustMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { of } from "rxjs/observable/of";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, toArray } from "rxjs/operators";
import { JobAdsApiService } from "job-ads-api";

import {
    LoadAds,
    JobAdsActionTypes,
    AdsLoaded,
    PackageSelected,
    CheckoutSuccess,
    Checkout
} from "../actions/job-ads.action";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JobAdsEffects {
    @Effect()
    loadAds$ = this.actions$
        .ofType(JobAdsActionTypes.LoadAds)
        .map((action: LoadAds) => action.payload)
        .exhaustMap(() =>
            this.jobAdsServ
                .getAds({})
                .map(adsList => new AdsLoaded(adsList))
                .catch(error => of(new AdsLoaded(error)))
        );

    @Effect({ dispatch: false })
    adsLoaded$ = this.actions$
        .ofType(JobAdsActionTypes.AdsLoaded)
        .exhaustMap((action: AdsLoaded) => action.payload.data);

    @Effect({ dispatch: false })
    checkout$ = this.actions$
        .ofType(JobAdsActionTypes.Checkout)
        .map((action: Checkout) => action.payload)
        .do(selections => {
            console.log("--->", selections);
            this.jobAdsServ
                .checkout(selections)
                .subscribe(data => new CheckoutSuccess(data));
            // this.router.navigate(["/checkout"]);
        });

    @Effect({ dispatch: false })
    checkoutSuccess$ = this.actions$
        .ofType(JobAdsActionTypes.CheckoutSuccess)
        .exhaustMap((action: CheckoutSuccess) => action.payload);

    constructor(
        private actions$: Actions,
        private router: Router,
        public jobAdsServ: JobAdsApiService
    ) {}
}
