export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
}

export function login(data) {
    return { 
        type: actionTypes.LOGIN,
        payload: {
            data
        }
    }
}

export function loginSuccess(response) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            data: response.data
        }
    }
}

export function loginFail(response) {
    return {
        type: actionTypes.LOGIN_FAIL,
        payload: {
            data: response.data
        }
    }
}