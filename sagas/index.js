import { all, fork } from 'redux-saga/effects'
// import example from './example';
import auth from './auth';
import phone from './phone';

export default function* root() {
    yield all([fork(auth), fork(phone)]);
}
