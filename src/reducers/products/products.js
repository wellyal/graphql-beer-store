import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'ventures_challenge/test/REQUEST',
  SUCCESS: 'ventures_challenge/test/SUCCESS',
  ERROR: 'ventures_challenge/test/ERROR'
}

const productsRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  success: null,
  error: null,
  data: null
}

const reducer = handleActions({
  [actionTypes.REQUEST](state) {
    return {
      ...state,
      isFetching: true
    }
  },
  [actionTypes.SUCCESS](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      success: true,
      data: payload.data
    }
  },
  [actionTypes.FAILURE](state, {payload}) {
    return {
      ...state,
      isFetching: false,
      error: payload
    }
  }
}, defaultState)

export const getProductsByLocation = (location) => productsRequest(location)

export default reducer