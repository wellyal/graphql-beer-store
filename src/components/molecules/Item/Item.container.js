import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addQuantity, addValue } from 'reducers/cart'

import Item from './Item'

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => bindActionCreators({ addQuantity, addValue }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)