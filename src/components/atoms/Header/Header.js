import React from 'react'

import './Header.css'

const Header = props => {
  return (
    <div {...props}>{props.children}</div>
  )
}

export default Header