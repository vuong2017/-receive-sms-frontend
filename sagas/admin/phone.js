/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";


import { call, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import PhoneAction from '@/actions/admin/phone'

const phoneAction = new PhoneAction();

es6promise.polyfill()

function* takeLatestGetDataPhoneSaga() {
  yield takeLatest(phoneAction.actionTypes.GET_DATA, getDataPhoneSaga);
}

function* takeLatestCreateDataPhoneSaga() {
  yield takeLatest(phoneAction.actionTypes.CREATE_DATA, createDataPhoneSaga);
}

function* takeLatestUpdateDataPhoneSaga() {
  yield takeLatest(phoneAction.actionTypes.UPDATE_DATA, updateDataPhoneSaga);
}

function* takeLatestDeleteDataPhoneSaga() {
  yield takeLatest(phoneAction.actionTypes.DELETE_DATA, deleteDataPhoneSaga);
}


function* getDataPhoneSaga(data) {
  try {
    yield put(phoneAction.setLoadingGetData(true));
    const result = yield call(getApiModule('Phone').getList, data.payload ? data.payload.params : {});
    const pagination = {
      current: result.meta.current_page,
      total: result.meta.total
    }
    
    yield put(phoneAction.getDataSuccess(result));
    yield put(phoneAction.updatePagination(pagination))
    yield put(phoneAction.setLoadingGetData(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

function* createDataPhoneSaga(data) {
  try {
    yield put(phoneAction.setLoadingCreateData(true));
    const result = yield call(getApiModule('Phone').create, data.payload);
    yield put(phoneAction.createDataSuccess(result));
    yield put(phoneAction.setLoadingCreateData(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(phoneAction.setLoadingCreateData(false))
    data.callback(error);
    console.log(error);
  }
}

function* updateDataPhoneSaga(data) {
  try {
    yield put(phoneAction.setLoadingUpdateData(true));
    const result = yield call(getApiModule('Phone').update, data.id, data.payload);
    yield put(phoneAction.updateDataSuccess(result));
    yield put(phoneAction.setLoadingUpdateData(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(phoneAction.setLoadingUpdateData(false))
    data.callback(error);
    console.log(error);
  }
}

function* deleteDataPhoneSaga(data) {  
  try {
    yield put(phoneAction.setLoadingDeleteData(true));
    const result = yield call(getApiModule('Phone').delete, data.id);
    yield put(phoneAction.deleteDataSuccess(data.id));
    yield put(phoneAction.setLoadingDeleteData(false))
    data.callback(null, result);
    return result;
  } catch (error) {
    yield put(phoneAction.setLoadingDeleteData(false))
    data.callback(error);
    console.log(error);
  }
}


export default function* root() {
  const yieldAll = [
    takeLatestGetDataPhoneSaga(),
    takeLatestCreateDataPhoneSaga(),
    takeLatestUpdateDataPhoneSaga(),
    takeLatestDeleteDataPhoneSaga(),
  ]
  yield all(yieldAll);
}