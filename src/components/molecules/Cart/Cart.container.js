import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clearCart } from 'reducers/cart'

import Cart from './Cart'

const mapStateToProps = ({ cart }) => ({ cart })

const mapDispatchToProps = dispatch => bindActionCreators({ clearCart }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)