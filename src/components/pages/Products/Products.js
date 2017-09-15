import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Footer from 'components/organisms/Footer'
import ListItems from 'components/organisms/ListItems'

import './Products.css'

export default class Products extends PureComponent {
  render() {
    console.log(this.props.test)
    return (
      <div>

        <Topbar />

        <ListItems />

        <Footer />

      </div>
    )
  }
}