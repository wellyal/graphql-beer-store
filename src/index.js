import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import Products from 'components/pages/Products'
import rootReducer from './reducers'
import rootSaga from './sagas'
import Routes from './Routes';

import './index.css'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
