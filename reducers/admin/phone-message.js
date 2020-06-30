import PhoneMessageAction from '@/actions/admin/phone-message'

const phoneMessageAction = new PhoneMessageAction();

export const initialState = {
  dataMessageByPhone: [],
  pagination: {
    current: 1,
    pageSize: 20,
    total: 0
  },
  isLoadingGet: false,
};

function reducer(state = initialState, action) {

  console.log("action", action);


  switch (action.type) {
    case phoneMessageAction.actionTypes.SET_LOADING_GET:
      return {
        ...state,
        isLoadingGet: action.payload.status
      }
    case phoneMessageAction.actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        dataMessageByPhone: action.payload.messages || [],
      };
    case phoneMessageAction.actionTypes.UPDATE_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload
        }
      };
    default:
      return state;
  }
}

export default reducer;
