/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";


import { call, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import PhoneMessageAction from '@/actions/admin/phone-message'

const phoneMessageAction = new PhoneMessageAction();

es6promise.polyfill()

function* takeLatestGetDataPhoneSaga() {
  yield takeLatest(phoneMessageAction.actionTypes.GET_DATA, getDataPhoneMessageSaga);
}

function* getDataPhoneMessageSaga(data) {
  console.log("vaooooooooooooooo", data);
  
  try {
    yield put(phoneMessageAction.setLoadingGetData(true));
    const result = yield call(getApiModule('Phone').getMessageByPhone, data.payload);
    yield put(phoneMessageAction.getDataSuccess(result));
    yield put(phoneMessageAction.setLoadingGetData(false))
    return result;
  } catch (error) {
    console.log(error);
  }
}


export default function* root() {
  const yieldAll = [
    takeLatestGetDataPhoneSaga(),
  ]
  yield all(yieldAll);
}