import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/products'

import productsService from 'services/products'

function* getProductsByLocation(payload) {
  try {
    const status = yield call(productsService.getProductsByLocation, payload)
    yield put({ type: actionTypes.SUCCESS, payload: status })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function* watchGetProductsByLocation() {
  yield takeEvery(actionTypes.REQUEST, getProductsByLocation)
}