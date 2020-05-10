/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";


import { call, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, getDataPhoneSuccess, getDataMessageByPhoneSuccess, setLoadingGetDataPhone, setLoadingGetDataMessageByPhone } from '@/actions/phone'

es6promise.polyfill()

function* takeLatestGetDataPhoneSaga() {
  yield takeLatest(actionTypes.GET_DATA_PHONE, getDataPhoneSaga);
}

function* takeLatestGetDataMessageByPhoneSaga() {
  yield takeLatest(actionTypes.GET_DATA_MESSAGE_BY_PHONE, getDataMessageByPhoneSaga);
}


function* getDataPhoneSaga() {
  try {
    yield put(setLoadingGetDataPhone(true));
    const result = yield call(getApiModule('Phone').getList);
    const meta = {
      current_page: result.meta.current_page,
      last_page: result.meta.last_page,
      total: result.meta.total
    }
    yield put(getDataPhoneSuccess({data: result.data, meta}));
    yield put(setLoadingGetDataPhone(false))
    return result;
  } catch (error) {
    console.log(error);
  }
}

function* getDataMessageByPhoneSaga(data) {
  try {
    const { idParams } = data.payload;
    yield put(setLoadingGetDataMessageByPhone(true));
    const result = yield call(getApiModule('Phone').getMessageByPhone, idParams.id);
    yield put(getDataMessageByPhoneSuccess(result));
    yield put(setLoadingGetDataMessageByPhone(false))
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default function* root() {
  const yieldAll = [
    takeLatestGetDataPhoneSaga(),
    takeLatestGetDataMessageByPhoneSaga()
  ]
  yield all(yieldAll);
}