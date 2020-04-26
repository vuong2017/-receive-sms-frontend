/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";

import { put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess } from '@/actions/example'

es6promise.polyfill()

function* takeLatestGetData() {
  yield takeLatest(actionTypes.LOAD_DATA, loadDataSaga);
}

function* loadDataSaga() {
  try {
    // const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const res = yield getApiModule('Example').getList();
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    // throw err;
    yield put(failure(err))
  }
}

export default function* root() {
  const yieldAll = [
    takeLatestGetData()
  ]
  yield all(yieldAll);
}