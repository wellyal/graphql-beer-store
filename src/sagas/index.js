import { all, fork } from 'redux-saga/effects'

import { watchTest } from './test'

export default function* rootSaga() {
  yield all([
    fork(watchTest)
  ])
}