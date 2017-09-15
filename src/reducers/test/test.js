import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
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
  }
}, defaultState)

export const toggleTest = (test = "bla") => testRequest(test)

export default reducer