import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Products from './Products'

const mapStateToProps = ({ products }) => ({ products })

export default connect(mapStateToProps, null)(Products)