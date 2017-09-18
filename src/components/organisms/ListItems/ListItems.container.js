import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addToCart } from 'reducers/cart'

import ListItems from './ListItems'

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => bindActionCreators({ addToCart }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListItems)