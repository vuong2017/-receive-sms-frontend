import { all, fork } from 'redux-saga/effects'
// import example from './example';
import auth from './auth';
// import phone from './phone';

//admin
import textnow from './admin/textnow';
import phone from './admin/phone';
import phoneMessage from './admin/phone-message';


export default function* root() {
    yield all([fork(auth), fork(phone), fork(textnow), fork(phoneMessage)]);
}
