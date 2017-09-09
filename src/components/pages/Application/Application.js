import React, { PureComponent } from 'react'
import Search from 'components/organisms/Search'
import Status from 'components/organisms/Status'
import Mapi from 'components/organisms/Map'

const INITIAL_LOCATION = {
  address: 'London, United Kingdom',
  position: {
    latitude: 51.5085300,
    longitude: -0.1257400
  }
}

const INITIAL_MAP_ZOOM_LEVEL = 8;

const ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
}

export default class Application extends PureComponent {

  componentDidMount() {
    this.map = new google.maps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    })

    this.marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude,
        lng: INITIAL_LOCATION.position.longitude
      }
    })

    this.geocoder = new google.maps.Geocoder();
  }

  render() {
    return (
      <div className="container-map">
        <form className="form-inline" onSubmit={this.handleFormSubmit}>
          <label className="sr-only" htmlFor="address">Address</label>
          <input type="text"
            className="form-control input-lg"
            id="address"
            ref={this.setSearchInputElementReference}
            placeholder="London"
            required
          />

          <button type="submit" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
          </button>
        </form>

        <div className="row">
          <div className="col-sm-12">
            { this.state.isGeocodingError
                ? <p className="bg-danger">Address not found.</p>
                : <p className="bg-info">{this.state.foundAddress}</p>
            }
          </div>
        </div>

        <div className="row">
            <div className="col-sm-12">

              <div className="map" ref={this.setMapElementReference}></div>

            </div>
          </div>
      </div>
    )
  }

  setMapElementReference = mapElementReference => {
    this.mapElement = mapElementReference;
  }

  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();

    const address = this.searchInputElement.value

    this.geocodeAddress(address);
  }

  setSearchInputElementReference = inputReference => {
    this.searchInputElement = inputReference;
  }

  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {

      if (status === google.maps.GeocoderStatus.OK) {
        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        })

        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      })

      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

      this.marker.setPosition({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

    });
  }

  state = {
    isGeocodingError: false,
    foundAddress: INITIAL_LOCATION.address
  }

}