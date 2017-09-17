import { all, fork } from 'redux-saga/effects'

import { watchGetProductsByLocation } from './products'

export default function* rootSaga() {
  yield all([
    fork(watchGetProductsByLocation)
  ])
}