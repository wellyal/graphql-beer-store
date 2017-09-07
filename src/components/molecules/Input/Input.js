import React from 'react'

import './Input.css'

const Input = () => (
  <div className="input-container">
    <input required id="123" type="text" />
    <label className="label-field" htmlFor="123">
      User
    </label>
  </div>
)

export default Input