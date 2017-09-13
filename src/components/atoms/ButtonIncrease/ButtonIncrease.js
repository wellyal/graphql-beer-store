import React from 'react'

import './ButtonIncrease.css'

const ButtonIncrease = props => {
  if(props.children) {
    console.warn('You should not pass text for this component. It is self rendered')
    return null;
  }

  return <button {...props} className="btn-plus fa fa-plus-square-o"></button>
}


export default ButtonIncrease