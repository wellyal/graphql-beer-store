import React, { PureComponent } from 'react'

class Search extends PureComponent {
  render() {
    return (
      <form className="form-inline">
        <label className="sr-only" htmlFor="address">Address</label>
        <input type="text"
          className="form-control input-lg"
          id="address"
          placeholder="London"
          required
        />

        <button type="submit" className="btn">
          <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        </button>
      </form>
    )
  }
}

export default Search