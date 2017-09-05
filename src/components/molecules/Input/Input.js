import React from 'react'

import './Input.css'

const Input = () => (
  <div className="input-container">
    <input required id="123" type="text"></input>
    <label className="label-field" for="123">
      User
    </label>
  </div>
)

export default Input