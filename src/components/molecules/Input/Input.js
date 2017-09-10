import React from 'react'

import './Input.css'

const Input = props => (
  <div className="input-container">
    <input required {...props}/>
    <label className="label-field" htmlFor={props.id}>
      {props.label}
    </label>
  </div>
)

export default Input