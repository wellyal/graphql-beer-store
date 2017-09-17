import React, { PureComponent } from 'react'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'

import './SearchBar.css'

export default class SearchBar extends PureComponent {
  state = {
    currentLocation: '',
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleFormSubmit}>
        <div className="form-input">
          <Input type="text"
            id="address"
            label="Address"
            type="text"
            onChange={this.handleInputChange}
            value={this.state.currentLocation}
            required
          />
        </div>

        <div className="form-button">
          <Button type="submit" className="btn icon fa fa-search" />
        </div>
      </form>
    )
  }

  handleInputChange = ev => this.setState({ currentLocation: ev.target.value })

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.props.setCurrentLocation(this.state.currentLocation)
  }
}