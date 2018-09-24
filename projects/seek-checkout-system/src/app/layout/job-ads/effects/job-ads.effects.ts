import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/exhaustMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, switchMap, toArray } from "rxjs/operators";

import {
    DataShared,
    JobAdsActionTypes,
    DataSharedSuccess
} from "../actions/job-ads.action";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DashboardEffects {
    // @Effect()
    // dataShared$: Observable<Action> = this.actions$.pipe(
    //     ofType<DataShared>(DashboardActionTypes.DataShared),
    //     map(action => action.payload),
    //     switchMap(data => data),
    //     map(data => new DataSharedSuccess([{ id: 1 }, { id: 2 }]))
    // );

    @Effect()
    dataShared$ = this.actions$
        .ofType(JobAdsActionTypes.DataShared)
        .map((action: DataShared) => action.payload)
        .map(data => {
            return new DataSharedSuccess({ data });
        });

    constructor(private actions$: Actions, private router: Router) {}
}
