export const actionTypes = {
    SET_LOADING_GET_DATA_TEXTNOW: 'SET_LOADING_GET_DATA_TEXTNOW',
    GET_DATA_TEXTNOW_SUCCESS: 'GET_DATA_TEXTNOW_SUCCESS',
    GET_DATA_TEXTNOW: 'GET_DATA_TEXTNOW',
    UPDATE_PAGINATION_TEXTNOW: 'UPDATE_PAGINATION_TEXTNOW',
    // CREATE
    SET_LOADING_CREATE_DATA_TEXTNOW: 'SET_LOADING_CREATE_DATA_TEXTNOW',
    CREATE_DATA_TEXTNOW: 'CREATE_DATA_TEXTNOW',
    CREATE_DATA_TEXTNOW_SUCCESS: 'CREATE_DATA_TEXTNOW_SUCCESS',
    // UPDATE
    SET_LOADING_UPDATE_DATA_TEXTNOW: 'SET_LOADING_UPDATE_DATA_TEXTNOW',
    UPDATE_DATA_TEXTNOW: 'UPDATE_DATA_TEXTNOW',
    UPDATE_DATA_TEXTNOW_SUCCESS: 'UPDATE_DATA_TEXTNOW_SUCCESS',
    // DELETE
    SET_LOADING_DELETE_DATA_TEXTNOW: 'SET_LOADING_DELETE_DATA_TEXTNOW',
    DELETE_DATA_TEXTNOW: 'DELETE_DATA_TEXTNOW',
    DELETE_DATA_TEXTNOW_SUCCESS: 'DELETE_DATA_TEXTNOW_SUCCESS'
}


export function getDataTextnow(payload) {
    return {
        type: actionTypes.GET_DATA_TEXTNOW,
        payload
    }
}

export function getDataTextnowSuccess(payload) {
    return {
        type: actionTypes.GET_DATA_TEXTNOW_SUCCESS,
        payload
    }
}


export function setLoadingGetDataTextnow(status) {
    return {
        type: actionTypes.SET_LOADING_GET_DATA_TEXTNOW,
        payload: {
            status
        }
    }
}

export function updatePaginationTextnow(payload) {
    return {
        type: actionTypes.UPDATE_PAGINATION_TEXTNOW,
        payload
    }
}

// CREATE

export function setLoadingCreateDataTextnow(status) {
    return {
        type: actionTypes.SET_LOADING_CREATE_DATA_TEXTNOW,
        payload: {
            status
        }
    }
}

export function createDataTextnow(payload, callback) {
    return {
        type: actionTypes.CREATE_DATA_TEXTNOW,
        payload,
        callback
    }
}

export function createDataTextnowSuccess(payload) {
    return {
        type: actionTypes.CREATE_DATA_TEXTNOW_SUCCESS,
        payload
    }
}



