import { Action } from "@ngrx/store";

export enum JobAdsActionTypes {
    DataShared = "[JobAds] Data Shared",
    DataSharedSuccess = "[JobAds] Data Shared Success"
}

export class DataShared implements Action {
    readonly type = JobAdsActionTypes.DataShared;

    constructor(public payload: any) {}
}

export class DataSharedSuccess implements Action {
    readonly type = JobAdsActionTypes.DataSharedSuccess;

    constructor(public payload: any) {}
}

export type JobAdsActions = DataShared | DataSharedSuccess;
