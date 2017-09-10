import React, { PureComponent } from 'react'
import './GoogleMap.css'

const INITIAL_LOCATION = {
  address: 'São Paulo',
  position: {
    latitude: -23.5505199,
    longitude: -46.6333094
  }
}

const INITIAL_MAP_ZOOM_LEVEL = 12;

const ATLANTIC_OCEAN = {
  latitude: 29.532804,
  longitude: -55.491477
}

class GoogleMap extends PureComponent {
  state = {
    isGeocodingError: false,
    foundAddress: INITIAL_LOCATION.address,
    search: this.props.search
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.search) {
      this.geocodeAddress(nextProps.search)
    }
  }

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
        <div className="status-bar">
          { this.state.isGeocodingError
            ? <p className="bg-danger">Address not found.</p>
            : <p className="bg-info">{this.state.foundAddress}</p>
          }
        </div>

        <div className="col-sm-12">
          <div className="map" ref={this.setMapElementReference}></div>
        </div>
      </div>
    )
  }

  setMapElementReference = mapElementReference => {
    this.mapElement = mapElementReference
  }

  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {

      if (status === google.maps.GeocoderStatus.OK) {
        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        })

        this.map.setCenter(results[0].geometry.location)
        this.marker.setPosition(results[0].geometry.location)

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
}

export default GoogleMap