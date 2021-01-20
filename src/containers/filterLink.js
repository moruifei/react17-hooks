import Link from '../components/link';
import { connect } from 'react-redux';
import { setVisibleTodo } from '../actions/actions'

const mapStateToProps = (state, ownProps) => ({
    active: state.visibleFilter === ownProps.filter
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibleTodo(ownProps.filter))
})
export default connect(mapStateToProps, mapDispatchToProps)(Link);