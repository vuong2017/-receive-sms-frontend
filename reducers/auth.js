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
  },
  loginFail: false,
  loginSuccess: false,
  errorsMessage: {
    errors: {
      email: [],
      password: [],
    },
    message: ""
  }
};

function reducer(state = authInitialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: action.payload.data,
        loginSuccess: true,
        loginFail: false
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        loginSuccess: false,
        loginFail: true,
        errorsMessage: {
          errors: action.payload.data.errors,
          message: action.payload.data.message
        }
      };
    default:
      return state;
  }
}

export default reducer;
