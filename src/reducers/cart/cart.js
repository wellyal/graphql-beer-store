import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  ADD_CART: 'ventures_challenge/cart/ADD_CART',
  CLEAR_CART: 'ventures_challenge/cart/CLEAR_CART'
}

const addToCartRequest = createAction(actionTypes.ADD_CART)
const clearCartRequest = createAction(actionTypes.CLEAR_CART)

const defaultState = []

const reducer = handleActions({
  [actionTypes.ADD_CART](state, { payload }) {
    return [ ...payload ]
  },
  [actionTypes.CLEAR_CART](state, { payload }) {
    return []
  },
}, defaultState)

export const addToCart = (cartItems) => addToCartRequest(cartItems)
export const clearCart = () => clearCartRequest()

export default reducer