import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Footer from 'components/organisms/Footer'
import ListItems from 'components/organisms/ListItems'
import { withRouter } from 'react-router-dom';

import './Products.css'

class Products extends PureComponent {

  componentWillMount() {
    if (!this.props.products.data) {
      this.props.history.push('/home')
    }
  }

  render() {
    const { data } = this.props.products
    if(!data) return null

    return (
      <div>
        <ListItems data={data}/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Products)