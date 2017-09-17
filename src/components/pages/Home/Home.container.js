import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getProductsByLocation } from 'reducers/products'

import Home from './Home'

const mapStateToProps = ({ products }) => ({ products })

const mapDispatchToProps = dispatch => bindActionCreators({ getProductsByLocation }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)