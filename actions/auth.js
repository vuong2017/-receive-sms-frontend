export const actionTypes = {
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS'
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