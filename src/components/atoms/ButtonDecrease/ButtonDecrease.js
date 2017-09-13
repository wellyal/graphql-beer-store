import React from 'react'

import './ButtonDecrease.css'

const ButtonDecrease = props => {
  if(props.children) {
    console.warn('You should not pass text for this component. It is self rendered')
    return null;
  }

  return <button {...props} className="btn-minus fa fa-minus-square"></button>
}

export default ButtonDecrease