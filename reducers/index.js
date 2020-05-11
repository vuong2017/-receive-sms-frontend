import { combineReducers } from 'redux'
import example from './example'
import auth from './auth'
import phone from './phone'
import textnow from './admin/textnow'

export default combineReducers({
    example,
    auth,
    phone,
    textnow
})