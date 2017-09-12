import React, { PureComponent } from 'react'
import Topbar from 'components/organisms/Topbar'

import goose_ipa from 'assets/imgs/goose_ipa.jpg'
import './Products.css'

export default class Products extends PureComponent {
  render() {
    return (
      <div>

        <Topbar />

        <div className="items-list">

          <div className="item">

            <div className="item-title">Goose Ipa 300 ml</div>
            <div className="item-value">25,90 R$</div>

            <figure className="item-figure">
              <img src={goose_ipa}/>
            </figure>

            <div className="item-footer">
              <button className="btn-minus fa fa-minus-square" />
              <input type="number" min="0" max="99"/>
              <button className="btn-plus fa fa-plus-square-o" />
            </div>

          </div>

        </div>

      </div>
    )
  }
}