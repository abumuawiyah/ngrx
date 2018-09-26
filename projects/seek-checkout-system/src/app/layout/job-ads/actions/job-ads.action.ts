import { Action } from "@ngrx/store";

export enum JobAdsActionTypes {
    LoadAds = "[JobAds] Load Ads",
    AdsLoaded = "[JobAds] Ads Loaded",
    PackageSelected = "[JobAds] Package Selected",
    Checkout = "[JobAds] Checkout",
    CheckoutSuccess = "[JobAds] Checkout Success"
}

export class LoadAds implements Action {
    readonly type = JobAdsActionTypes.LoadAds;

    constructor(public payload: any) {}
}

export class AdsLoaded implements Action {
    readonly type = JobAdsActionTypes.AdsLoaded;

    constructor(public payload: any) {}
}

export class PackageSelected implements Action {
    readonly type = JobAdsActionTypes.PackageSelected;

    constructor(public payload: any) {}
}

export class Checkout implements Action {
    readonly type = JobAdsActionTypes.Checkout;

    constructor(public payload: any) {}
}

export class CheckoutSuccess implements Action {
    readonly type = JobAdsActionTypes.CheckoutSuccess;

    constructor(public payload: any) {}
}

export type JobAdsActions =
    | LoadAds
    | AdsLoaded
    | PackageSelected
    | Checkout
    | CheckoutSuccess;
