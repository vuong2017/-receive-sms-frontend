import { actionTypes } from "@/actions/phone";

export const authInitialState = {
    dataPhones: [],
    dataMessageByPhone: [],
    meta: {
        current_page: 0,
        last_page: 0,
        total: 0
    },
    isLoadingGet: false,
    isLoadingGetMessageByPhone: false,
};

function reducer(state = authInitialState, action) {
    switch (action.type) {
        case actionTypes.SET_LOADING_GET_DATA_PHONE:
            return {
                ...state,
                isLoadingGet: action.payload.status
            }
        case actionTypes.GET_DATA_PHONE_SUCCESS:
            return {
                ...state,
                dataPhones: action.payload.data || [],
                meta: action.payload.meta
            };
        case actionTypes.SET_LOADING_GET_DATA_MESSAGE_BY_PHONE:
            return {
                ...state,
                isLoadingGetMessageByPhone: action.payload.status
            }
        case actionTypes.GET_DATA_MESSAGE_BY_PHONE_SUCCESS:
            return {
                ...state,
                dataMessageByPhone: action.payload.messages || [],
            };
        default:
            return state;
    }
}

export default reducer;
