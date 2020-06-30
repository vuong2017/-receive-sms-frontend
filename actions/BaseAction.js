export default class BaseAction {

    actionTypes;

    constructor(actionTypes) {
        this.actionTypes = actionTypes;
    }

    getData = (payload, callback) => {
        return {
            type: this.actionTypes.GET_DATA,
            payload,
            callback
        }
    }

    getDataSuccess = (payload) => {
        return {
            type: this.actionTypes.GET_DATA_SUCCESS,
            payload
        }
    }


    setLoadingGetData = (status) => {
        return {
            type: this.actionTypes.SET_LOADING_GET,
            payload: {
                status
            }
        }
    }

    updatePagination = (payload) => {
        return {
            type: this.actionTypes.UPDATE_PAGINATION,
            payload
        }
    }

    // CREATE

    setLoadingCreateData = (status) => {
        return {
            type: this.actionTypes.SET_LOADING_CREATE,
            payload: {
                status
            }
        }
    }

    createData = (payload, callback) => {
        return {
            type: this.actionTypes.CREATE_DATA,
            payload,
            callback
        }
    }

    createDataSuccess = (payload) => {
        return {
            type: this.actionTypes.CREATE_DATA_SUCCESS,
            payload
        }
    }

    // UPDATE

    setLoadingUpdateData = (status) => {
        return {
            type: this.actionTypes.SET_LOADING_UPDATE,
            payload: {
                status
            }
        }
    }

    updateData = (id, payload, callback) => {
        return {
            type: this.actionTypes.UPDATE_DATA,
            id,
            payload,
            callback
        }
    }

    updateDataSuccess = (payload) => {
        return {
            type: this.actionTypes.UPDATE_DATA_SUCCESS,
            payload
        }
    }

    // DELETE

    setLoadingDeleteData = (status) => {
        return {
            type: this.actionTypes.SET_LOADING_DELETE,
            payload: {
                status
            }
        }
    }

    deleteData = (id, callback) => {
        console.log(this.actionTypes);
        
        return {
            type: this.actionTypes.DELETE_DATA,
            id,
            callback
        }
    }

    deleteDataSuccess = (id) => {
        return {
            type: this.actionTypes.DELETE_DATA_SUCCESS,
            payload: {
                id
            }
        }
    }

}