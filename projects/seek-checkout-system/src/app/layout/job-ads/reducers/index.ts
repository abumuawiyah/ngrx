import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as fromJobAds from "./job-ads.reducer";

export interface JobAdsState {
    ads: fromJobAds.State;
    selections: fromJobAds.State;
    checkoutItems: fromJobAds.State;
}

export interface State extends fromRoot.State {
    jobAds: JobAdsState;
}

export const reducers = {
    ads: fromJobAds.reducer,
    selections: fromJobAds.reducer,
    checkoutItems: fromJobAds.reducer
};

export const getJobAdsState = createFeatureSelector<JobAdsState>("jobAds");

export const getAds = createSelector(getJobAdsState, state => {
    return state.ads;
});

export const getSelectedPackages = createSelector(getJobAdsState, state => {
    return state.selections;
});

export const getCheckoutItems = createSelector(getJobAdsState, state => {
    return state.checkoutItems;
});
