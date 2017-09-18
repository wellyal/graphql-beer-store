import React from 'react'
import PropTypes from 'prop-types'

const THOUSANDS = /(\d)(?=(\d{3})+\.)/g
const DOT_DECIMAL_SEPARATOR = /\.(\d{2})$/

const formatValue = ({ symbol, value, minus }) => {
  const formated = Math.abs(value).toFixed(2)
    .replace(THOUSANDS, '$1.')
    .replace(DOT_DECIMAL_SEPARATOR, ',$1')

  const currency = `${symbol} ${formated}`

  return (value < 0 || (String(minus).toLowerCase() === 'true')) ? `- ${currency}` : currency
}

const Money = ({ symbol, value, minus, ...props }) => (
  <span {...props}>
    {
      isNaN(value)
      ? `${symbol} -,--`
      : formatValue({ symbol, value, minus })
    }
  </span>
)

Money.propTypes = {
  symbol: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  minus: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

Money.defaultProps = {
  symbol: 'R$',
  value: 0,
  minus: false
}

export default Money
