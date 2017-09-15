import React, { PureComponent } from 'react'

import './Footer.css'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer-container">
        <div className="footer-cart fa fa-cart-plus" />
      </footer>
    )
  }
}