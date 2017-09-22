import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import Products from 'components/pages/Products'
import rootReducer from './reducers'
import rootSaga from './sagas'
import Routes from './Routes';

import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'}),
})

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
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)
