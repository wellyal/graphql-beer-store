import React, { PureComponent } from 'react'
import Item from 'components/molecules/Item'

import './ListItems.css'

export default class ListItems extends PureComponent {
  render() {
    const listItems = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
      <div className="list-items">
        { listItems.map(item => <Item key={item}/>) }
      </div>
    )
  }
}