import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Header from 'components/atoms/Header'
import Input from 'components/atoms/Input'
import Button from 'components/atoms/Button'
import GoogleMap from 'components/organisms/GoogleMap'

import './Home.css'

export default class Home extends PureComponent {
  state = {
    currentLocation: '',
    search: ''
  }

  render() {
    console.log(this.props.test)

    return (
      <section>
        <main className="container">
          <section className="head-container">

            <Header className="header h3">Choose your currently location</Header>

          </section>

          <section className="container-form">

            <form className="form-inline" onSubmit={this.handleFormSubmit}>
              <Input type="text"
                id="address"
                label="Address"
                type="text"
                onChange={this.handleInputChange}
                value={this.state.currentLocation}
                required
              />

              <div className="submit-btn">
                <Button type="submit" className="btn btn-secondary fa fa-search"></Button>
              </div>
            </form>

          </section>

          <GoogleMap
            search={this.state.search}
          />

          <div className="footer-btn">
            <Button onClick={this.handleGetYourBeerClick} className="btn">Get your Beer!</Button>
          </div>
        </main>
      </section>
    )
  }

  handleInputChange = ev => this.setState({ currentLocation: ev.target.value })

  handleFormSubmit = ev => {
    ev.preventDefault();
    this.setState({ search: this.state.currentLocation });
  }

  handleGetYourBeerClick = () => {
    this.props.toggleTest('meu')
  }
}