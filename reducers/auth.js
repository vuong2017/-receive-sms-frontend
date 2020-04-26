import { actionTypes } from "@/actions/auth";

export const authInitialState = {
  userLogin: {
    id: null,
    created_at: "",
    email: "",
    email_verified_at: null,
    name: "",
    token: "",
    updated_at: ""
  }
};

function reducer(state = authInitialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: action.payload.data
      };
    default:
      return state;
  }
}

export default reducer;
