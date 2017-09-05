import React from 'react'
import './Header.css'

const Header = ({ children, ...props }) => <div {...props}>{children}</div>

export default Header