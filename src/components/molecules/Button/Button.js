import React from 'react'

import './Button.css'

const Button = props => {
  return (
    <button className='btn' {...props}>
      Get your Beer!
    </button>
  )
}

export default Button