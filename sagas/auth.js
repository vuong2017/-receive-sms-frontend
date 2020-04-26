/* global fetch */
import { all } from 'redux-saga/effects'

import { getApiModule } from "@/api/ApiHelpers";
import router from 'next/router'


import { call, put, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, loginSuccess, loginFail } from '@/actions/auth'
import AuthHelper from "@/utils/AuthHelper";

es6promise.polyfill()

function* takeLatestLogin() {
  yield takeLatest(actionTypes.LOGIN, loginSaga);
}


function* loginSaga({payload}) {
  try {
    const result = yield call(getApiModule('Auth').login, payload.data);
    yield put(loginSuccess(result));
    const authHelper = new AuthHelper();
    const auth = {
      token: result.data.token
    }
    authHelper.setAuthLocalStorage(auth);
    router.push("/");
    return result;
  } catch (error) {
    yield put(loginFail(error.response));
  }
}

export default function* root() {
  const yieldAll = [
    takeLatestLogin()
  ]
  yield all(yieldAll);
}