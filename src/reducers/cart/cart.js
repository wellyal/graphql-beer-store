import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  ADD_QUANTITY: 'ventures_challenge/cart/ADD_QUANTITY',
  ADD_VALUE: 'ventures_challenge/cart/ADD_VALUE',
}

const addQuantityRequest = createAction(actionTypes.ADD_QUANTITY)
const addValueRequest = createAction(actionTypes.ADD_VALUE)

const defaultState = {
  quantity: 0,
  value: 0,
  items: []
}

const reducer = handleActions({
  [actionTypes.ADD_QUANTITY](state, { payload }) {
    return {
      ...state
    }
  },
  [actionTypes.ADD_VALUE](state, { payload }) {
    return {
      ...state,
    }
  },
}, defaultState)

export const addQuantity = (quantity) => addQuantityRequest(quantity)
export const addValue = (value) => addValueRequest(value)

export default reducer