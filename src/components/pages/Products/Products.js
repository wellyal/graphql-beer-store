import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Button from 'components/atoms/Button'
import Item from 'components/molecules/Item'

import './Products.css'

export default class Products extends PureComponent {
  render() {
    console.log(this.props.test)
    return (
      <div>

        <Topbar />

        <Item />

      </div>
    )
  }
}