import { combineReducers } from 'redux'
import example from './example'
import auth from './auth'
import phone from './phone'

export default combineReducers({
    example,
    auth,
    phone
})