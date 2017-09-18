import React, { PureComponent } from 'react'
import Cart from 'components/molecules/Cart'

import './Footer.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer-container">
        <Cart />
      </footer>
    )
  }
}