import { JobAdsActionTypes, JobAdsActions } from "../actions/job-ads.action";

export interface State {
    ads: Array<any>;
    loaded: boolean;
    selections: Array<any>;
    checkoutComplete: boolean;
    checkoutItems: Array<any>;
}

export const adsState: State = {
    ads: null,
    loaded: false,
    selections: null,
    checkoutComplete: false,
    checkoutItems: null
};

export function reducer(state = adsState, action: JobAdsActions): State {
    switch (action.type) {
        case JobAdsActionTypes.LoadAds: {
            return {
                ...state,
                loaded: false,
                ads: [],
                selections: [],
                checkoutComplete: false,
                checkoutItems: []
            };
        }

        case JobAdsActionTypes.AdsLoaded: {
            return {
                ...state,
                loaded: true,
                ads: action.payload.data,
                selections: []
            };
        }

        case JobAdsActionTypes.PackageSelected: {
            const newSelection = {};
            newSelection[action.payload.ad] = action.payload.package;

            return {
                ...state,
                selections: [...state.selections, newSelection]
            };
        }

        case JobAdsActionTypes.Checkout: {
            return {
                ...state,
                checkoutComplete: false
            };
        }

        case JobAdsActionTypes.CheckoutSuccess: {
            return {
                ...state,
                checkoutComplete: true,
                checkoutItems: [...action.payload]
            };
        }

        default: {
            return state;
        }
    }
}
