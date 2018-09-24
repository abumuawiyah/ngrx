import { createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as fromDashboard from "./job-ads.reducer";

export interface DashboardState {
    dashboardState: fromDashboard.State;
}

export interface State extends fromRoot.State {
    dashboardState: DashboardState;
}

export const reducers = {
    dashboardState: fromDashboard.reducer
};

export const getDashboardState = createFeatureSelector<DashboardState>(
    "dashboard"
);

export const getSharedData = createSelector(getDashboardState, state => {
    return state.dashboardState.dataShared.data;
});
