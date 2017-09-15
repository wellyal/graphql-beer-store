import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/test'

import testService from 'services/test'

function* test(payload) {
  try {
    console.log('saga called')
    const status = yield call(testService.test, payload)
    yield put({ type: actionTypes.SUCCESS, payload: status })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function* watchTest() {
  yield takeEvery(actionTypes.REQUEST, test)
}