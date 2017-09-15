import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Topbar from 'components/organisms/Topbar'
import Footer from 'components/organisms/Footer'
import Home from 'components/pages/Home'
import Products from 'components/pages/Products'

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={Topbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />

      <Route exact path="/products" render={() => (
          <div>
            <Products />
            <Footer />
          </div>
        )}
      />
    </div>
  </Router>
)

export default Routes
