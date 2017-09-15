import React from 'react'
import Button from 'components/atoms/Button'

import './Topbar.css'

const Topbar = () => (
  <header className="header-container">
    <div className="header-left fa fa-github"></div>

    <div className="header-right">
      <span className="marker fa fa-map-marker" />
      <Button className="btn primary">Login</Button>
    </div>
  </header>
)

export default Topbar