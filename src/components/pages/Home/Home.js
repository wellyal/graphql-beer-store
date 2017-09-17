import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'
import Header from 'components/atoms/Header'
import Button from 'components/atoms/Button'
import SearchBar from 'components/molecules/SearchBar'
import GoogleMap from 'components/organisms/GoogleMap'
import Loader from 'components/atoms/Loader'

import './Home.css'

export default class Home extends PureComponent {
  state = {
    search: ''
  }

  componentWillReceiveProps(nextProps) {
    const { error, success } = nextProps.products

    if (success) {
      this.props.history.push('/products')
    } else if (error) {
      /**
        TODO:
        - Show error message
       */
    }
  }

  render() {
    const { isFetching } = this.props.products
    if ( isFetching ) return <Loader />

    return (
      <section>
        <main className="container">

          <Header className="header h3">Choose your currently location</Header>

          <SearchBar setCurrentLocation={this.setCurrentLocation}/>

          <GoogleMap search={this.state.search} />

          <div className="footer-btn">
            <Button onClick={this.handleGetYourBeerClick} className="btn secondary">
              Get your Beer!
            </Button>
          </div>
        </main>
      </section>
    )
  }

  setCurrentLocation = location => this.setState({ search: location })

  handleGetYourBeerClick = () => {
    this.props.getProductsByLocation('meu')
  }
}