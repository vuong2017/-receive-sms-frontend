import { actionTypes } from "@/actions/admin/textnow";

export const initialState = {
    dataTextnows: [],
    pagination: {
        current: 1,
        pageSize: 20,
        total: 0
    },
    isLoadingGet: false,
    isCreateData: false,
    isUpdateData: false,
    isDeleteData: false
};

function reducer(state = initialState, action) {
    console.log(action);
    
    switch (action.type) {
        case actionTypes.SET_LOADING_GET_DATA_TEXTNOW:
            return {
                ...state,
                isLoadingGet: action.payload.status
            }
        case actionTypes.GET_DATA_TEXTNOW_SUCCESS:
            return {
                ...state,
                dataTextnows: action.payload.data || [],
            };
        case actionTypes.UPDATE_PAGINATION_TEXTNOW:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    ...action.payload
                }
            };
        // CREATE
        case actionTypes.SET_LOADING_CREATE_DATA_TEXTNOW:
            return {
                ...state,
                isCreateData: action.payload.status
            }
        case actionTypes.CREATE_DATA_TEXTNOW_SUCCESS:
            return {
                ...state,
                dataTextnows: [action.payload.data, ...state.dataTextnows]
            };
        // UPDATE
        case actionTypes.SET_LOADING_UPDATE_DATA_TEXTNOW:
            return {
                ...state,
                isUpdateData: action.payload.status
            }
        case actionTypes.UPDATE_DATA_TEXTNOW_SUCCESS:
            return {
                ...state,
                dataTextnows: state.dataTextnows.map(x => {
                    if (x.id === action.payload.data.id) {
                        return {...x, ...action.payload.data}
                    }
                    return x;
                })
            };
        default:
            return state;
    }
}

export default reducer;
