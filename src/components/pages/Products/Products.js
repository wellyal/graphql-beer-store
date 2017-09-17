import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Footer from 'components/organisms/Footer'
import ListItems from 'components/organisms/ListItems'

import './Products.css'

export default class Products extends PureComponent {

  componentWillMount() {
    console.log('calling me')
    if (!this.props.products.data) {
      console.log('NO DATA AVAILABLE!')
    }
  }

  render() {
    const { data } = this.props.products

    if (this.props.products)
    return (
      <div>

        <ListItems data={data}/>

        <Footer />

      </div>
    )
  }
}