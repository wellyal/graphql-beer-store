import React, { PureComponent } from 'react'
import Item from 'components/molecules/Item'
import uuidv4 from 'uuid/v4'

import './ListItems.css'

export default class ListItems extends PureComponent {

  state = {
    listItems: [],
    cartItems: []
  }

  componentWillMount() {
    const listItems = this.props.data.productsMock.data.map(item =>
      ({
        id: uuidv4(),
        quantity: 0,
        ...item
      })
    )

    this.setState({ listItems })
  }

  render() {
    console.log('cartItems', this.state.cartItems)
    const { listItems } = this.state
    if (!listItems) return

    return (
      <div className="list-items">
        { listItems.map(item => <Item key={item.id} addItemCart={this.addItemCart} item={item} />) }
      </div>
    )
  }

  addItemCart = (id, quantity) => {
    let itemSelected = null
    let newCartItems = null

    const { listItems } = this.state
    const { cart } = this.props
    const indexCartItem = cart.findIndex(item => item.id === id)

    if (indexCartItem >= 0) {

      itemSelected = cart.find(item => item.id === id)

      newCartItems = [
        ...cart.slice(0, indexCartItem),
        { ...itemSelected, quantity },
        ...cart.slice(indexCartItem + 1)
      ]

    } else {

      itemSelected = listItems.find(item => item.id === id)
      newCartItems = [ ...cart, { ...itemSelected, quantity }]
    }

    this.props.addToCart(newCartItems)
  }

}