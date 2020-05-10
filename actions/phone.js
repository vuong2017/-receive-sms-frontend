export const actionTypes = {
    SET_LOADING_GET_DATA_PHONE: 'SET_LOADING_GET_DATA_PHONE',
    SET_LOADING_GET_DATA_MESSAGE_BY_PHONE: 'SET_LOADING_GET_DATA_MESSAGE_BY_PHONE',
    GET_DATA_PHONE_SUCCESS: 'GET_DATA_PHONE_SUCCESS',
    GET_DATA_PHONE: 'GET_DATA_PHONE',
    GET_DATA_MESSAGE_BY_PHONE: 'GET_DATA_MESSAGE_BY_PHONE',
    GET_DATA_MESSAGE_BY_PHONE_SUCCESS: 'GET_DATA_MESSAGE_BY_PHONE_SUCCESS'
}


export function getDataPhone() {
    return {
        type: actionTypes.GET_DATA_PHONE,
    }
}

export function getDataMessageByPhone(payload) {
    return {
        type: actionTypes.GET_DATA_MESSAGE_BY_PHONE,
        payload
    }
}

export function getDataPhoneSuccess({data, meta}) {
    return {
        type: actionTypes.GET_DATA_PHONE_SUCCESS,
        payload: {
            data,
            meta
        }
    }
}

export function getDataMessageByPhoneSuccess(payload) {
    return {
        type: actionTypes.GET_DATA_MESSAGE_BY_PHONE_SUCCESS,
        payload
    }
}

export function setLoadingGetDataPhone(status) {
    return {
        type: actionTypes.SET_LOADING_GET_DATA_PHONE,
        payload: {
            status
        }
    }
}

export function setLoadingGetDataMessageByPhone(status) {
    return {
        type: actionTypes.SET_LOADING_GET_DATA_MESSAGE_BY_PHONE,
        payload: {
            status
        }
    }
}
