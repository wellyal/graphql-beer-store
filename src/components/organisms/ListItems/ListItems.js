import React, { PureComponent } from 'react'
import Item from 'components/molecules/Item'

import './ListItems.css'

export default class ListItems extends PureComponent {
  render() {
    const listItems = this.props.data.productsMock.data

    return (
      <div className="list-items">
        { listItems.map(item => <Item key={item.title} item={item} />) }
      </div>
    )
  }
}