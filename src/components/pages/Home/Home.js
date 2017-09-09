import React from 'react'
import Topbar from 'components/organisms/Topbar'
import Header from 'components/atoms/Header'
import Input from 'components/molecules/Input'
import Button from 'components/molecules/Button'

import './Home.css'

const Home = () => (
  <section>
    <Topbar />
    <main className="container">
      <section className="head-container">
        <Header className="header h3">Choose your currently location</Header>
      </section>
      <section className="">
        <div className="row"><Input /></div>
        <div className="row"><Button /></div>
      </section>
    </main>
  </section>
)

export default Home