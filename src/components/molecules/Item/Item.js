import React, { PureComponent } from 'react'
import ButtonIncrease from 'components/atoms/ButtonIncrease'
import ButtonDecrease from 'components/atoms/ButtonDecrease'

import goose_ipa from 'assets/imgs/goose_ipa.jpg'
import './Item.css'

export default class Item extends PureComponent {
  render() {
    return (
      <div className="item">

        <div className="item-header">
          <div className="item-title">Goose Ipa 300 ml</div>
          <div className="item-value">25,90 R$</div>
        </div>

        <figure className="item-figure">
          <img src={goose_ipa}/>
        </figure>

        <div className="item-footer">
          <ButtonDecrease />
          <input maxLength="2" type="text" />
          <ButtonIncrease />
        </div>

      </div>
    )
  }

}