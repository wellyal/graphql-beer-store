import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'ventures_challenge/test/REQUEST',
  SUCCESS: 'ventures_challenge/test/SUCCESS',
  FAILURE: 'ventures_challenge/test/FAILURE',
  TEST: 'ventures_challenge/test/TEST'
}

const testRequest = createAction(actionTypes.TEST)

const defaultState = {
  isFetching: false,
  success: null,
  error: null,
  data: null,
  test: false
}

const reducer = handleActions({
  [actionTypes.TEST](state) {
    return {
      ...state,
      test: true
    }
  },
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
      data: payload.data.authMock.data
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

export const toggleTest = () => testRequest()

export default reducer