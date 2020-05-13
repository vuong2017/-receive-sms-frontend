/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";


import { call, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { 
  actionTypes, 
  getDataTextnowSuccess, 
  setLoadingGetDataTextnow, 
  updatePaginationTextnow, 
  setLoadingCreateDataTextnow, 
  createDataTextnowSuccess, 
  setLoadingUpdateDataTextnow, 
  updateDataTextnowSuccess, 
  setLoadingDeleteDataTextnow, 
  deleteDataTextnowSuccess 
} from '@/actions/admin/textnow'

es6promise.polyfill()

function* takeLatestGetDataTextnowSaga() {
  yield takeLatest(actionTypes.GET_DATA_TEXTNOW, getDataTextnowSaga);
}

function* takeLatestCreateDataTextnowSaga() {
  yield takeLatest(actionTypes.CREATE_DATA_TEXTNOW, createDataTextnowSaga);
}

function* takeLatestUpdateDataTextnowSaga() {
  yield takeLatest(actionTypes.UPDATE_DATA_TEXTNOW, updateDataTextnowSaga);
}

function* takeLatestDeleteDataTextnowSaga() {
  yield takeLatest(actionTypes.DELETE_DATA_TEXTNOW, deleteDataTextnowSaga);
}


function* getDataTextnowSaga(data) {
  try {
    yield put(setLoadingGetDataTextnow(true));
    const result = yield call(getApiModule('Textnow').getList, data.payload ? data.payload.params : {});
    const pagination = {
      current: result.meta.current_page,
      total: result.meta.total
    }
    yield put(getDataTextnowSuccess(result));
    yield put(updatePaginationTextnow(pagination))
    yield put(setLoadingGetDataTextnow(false))
    return result;
  } catch (error) {
    console.log(error);
  }
}

function* createDataTextnowSaga(data) {
  try {
    yield put(setLoadingCreateDataTextnow(true));
    const result = yield call(getApiModule('Textnow').create, data.payload);
    yield put(createDataTextnowSuccess(result));
    yield put(setLoadingCreateDataTextnow(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(setLoadingCreateDataTextnow(false))
    data.callback(error);
    console.log(error);
  }
}

function* updateDataTextnowSaga(data) {
  try {
    yield put(setLoadingUpdateDataTextnow(true));
    const result = yield call(getApiModule('Textnow').update, data.id, data.payload);
    yield put(updateDataTextnowSuccess(result));
    yield put(setLoadingUpdateDataTextnow(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(setLoadingUpdateDataTextnow(false))
    data.callback(error);
    console.log(error);
  }
}

function* deleteDataTextnowSaga(data) {
  console.log("Vao ne2222222");
  
  try {
    yield put(setLoadingDeleteDataTextnow(true));
    const result = yield call(getApiModule('Textnow').delete, data.id);
    yield put(deleteDataTextnowSuccess(data.id));
    yield put(setLoadingDeleteDataTextnow(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(setLoadingDeleteDataTextnow(false))
    data.callback(error);
    console.log(error);
  }
}


export default function* root() {
  const yieldAll = [
    takeLatestGetDataTextnowSaga(),
    takeLatestCreateDataTextnowSaga(),
    takeLatestUpdateDataTextnowSaga(),
    takeLatestDeleteDataTextnowSaga(),
  ]
  yield all(yieldAll);
}