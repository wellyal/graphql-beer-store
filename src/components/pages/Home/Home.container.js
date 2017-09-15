import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleTest } from 'reducers/test'

import Home from './Home'

const mapStateToProps = ({ test }) => ({ test })

const mapDispatchToProps = dispatch => bindActionCreators({ toggleTest }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)