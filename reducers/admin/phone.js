import PhoneAction from '@/actions/admin/phone'

const phoneAction = new PhoneAction();

export const initialState = {
    dataPhones: [],
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

    console.log("action", action);
    

    switch (action.type) {
        case phoneAction.actionTypes.SET_LOADING_GET:
            return {
                ...state,
                isLoadingGet: action.payload.status
            }
        case phoneAction.actionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                dataPhones: action.payload.data || [],
            };
        case phoneAction.actionTypes.UPDATE_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    ...action.payload
                }
            };
        // CREATE
        case phoneAction.actionTypes.SET_LOADING_CREATE:
            return {
                ...state,
                isCreateData: action.payload.status
            }
        case phoneAction.actionTypes.CREATE_DATA_SUCCESS:
            return {
                ...state,
                dataPhones: [action.payload.data, ...state.dataPhones]
            };
        // UPDATE
        case phoneAction.actionTypes.SET_LOADING_UPDATE:
            return {
                ...state,
                isUpdateData: action.payload.status
            }
        case phoneAction.actionTypes.UPDATE_DATA_SUCCESS:
            return {
                ...state,
                dataPhones: state.dataPhones.map(x => {
                    if (x.id === action.payload.data.id) {
                        return {...x, ...action.payload.data}
                    }
                    return x;
                })
            };
        // DELETE
        case phoneAction.actionTypes.SET_LOADING_DELETE:
            return {
                ...state,
                isDeleteData: action.payload.status
            }
        case phoneAction.actionTypes.DELETE_DATA_SUCCESS:
            return {
                ...state,
                dataPhones: state.dataPhones.filter(x => x.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export default reducer;
