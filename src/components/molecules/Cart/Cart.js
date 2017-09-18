import React, { PureComponent } from 'react'
import Money from 'components/atoms/Money'

import './Cart.css'

export default class Cart extends PureComponent {

  state = {
    value: 0,
    quantity: 0
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.cart) {
      const cartValues = nextProps.cart.map(item => {
        return +item.quantity * +item.price
      })

      const cartQuantity = nextProps.cart.map(item => {
        return +item.quantity
      })

      const value = cartValues.reduce((a, b) => a + b)
      const quantity = cartQuantity.reduce((a, b) => a + b)
      this.setState({ value, quantity })
    }
  }

  componentWillUnmount() {
    this.props.clearCart()
  }

  render() {
    return (
      <div className="cart">
        <div className="cart-value"><Money value={this.state.value} /></div>
        <div className="cart-icon fa fa-cart-plus">
          <div className="cart-quantity">{this.state.quantity}</div>
        </div>
      </div>
    )
  }
}