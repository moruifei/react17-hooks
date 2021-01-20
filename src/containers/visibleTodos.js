import todoList from '../components/todoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/actions';
import * as actionTypes from '../consts/actionTypes';

const getShowTodo = (todos, visible) => {
    switch (visible) {
        case actionTypes.visibleFilter.SHOW_ALL:
            return todos;
        case actionTypes.visibleFilter.SHOW_COMPLETE:
            return todos.filter(it => it.complete);
        case actionTypes.visibleFilter.SHOW_ACTIVE:
            return todos.filter(it => !it.complete);
        case actionTypes.visibleFilter.SHOW_CLEAR:
            return [];
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: getShowTodo(state.todos, state.visibleFilter)
})
const mapDispatchToProps = (dispatch) => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(todoList);