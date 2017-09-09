import React, { PureComponent } from 'react'

class Map extends PureComponent {
  render() {
    return (
      <div className="container-map">
        <div className="row">
          <div className="col-sm-12">
            <p className="bg-info">London, United Kingdom</p>
            <div className="map"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Map