import { combineReducers } from 'redux'
import example from './example'
import auth from './auth'
// import phone from './phone'

import textnow from './admin/textnow'
import phone from './admin/phone'
import phoneMessage from './admin/phone-message'

export default combineReducers({
    example,
    auth,
    phone,
    textnow,
    phoneMessage
})