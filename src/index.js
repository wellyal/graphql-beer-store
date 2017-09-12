import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from 'components/pages/Home'
import Products from 'components/pages/Products'
import rootReducer from './reducers'

import './index.css'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Products />
  </Provider>,
  document.getElementById('app')
)
