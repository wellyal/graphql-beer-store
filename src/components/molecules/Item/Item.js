import React, { PureComponent } from 'react'
import ButtonIncrease from 'components/atoms/ButtonIncrease'
import ButtonDecrease from 'components/atoms/ButtonDecrease'

import './Item.css'

export default class Item extends PureComponent {
  render() {
    const { id, title, price, imageUrl } = this.props.item
    this.id = id

    return (
      <div className="item">

        <div className="item-header">
          <div className="item-title">{title}</div>
          <div className="item-value">{price}</div>
        </div>

        <div className="item-content">

          <figure className="item-figure">
            <img src={imageUrl}/>
          </figure>

          <div className="item-footer">
            <ButtonDecrease onClick={this.addItem} />
            <input onBlur={this.updateQuantityItem} maxLength="2" type="text" />
            <ButtonIncrease onClick={this.removeItem} />
          </div>

        </div>

      </div>
    )
  }

  updateQuantityItem = ev => {
    const value = ev.target.value || 0
    this.props.addItemCart(this.id, value)
  }
}