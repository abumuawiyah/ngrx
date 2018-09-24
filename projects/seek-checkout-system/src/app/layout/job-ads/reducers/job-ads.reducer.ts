import { JobAdsActionTypes, JobAdsActions } from "../actions/job-ads.action";

export interface State {
    dataShared: any;
}

export const initialState: State = {
    dataShared: {}
};

export function reducer(state = initialState, action: JobAdsActions): State {
    switch (action.type) {
        case JobAdsActionTypes.DataShared: {
            return {
                ...state,
                dataShared: action.payload
            };
        }

        case JobAdsActionTypes.DataSharedSuccess: {
            return {
                ...state,
                dataShared: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
