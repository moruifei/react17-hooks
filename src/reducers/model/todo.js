import * as actionTypes from '../../consts/actionTypes';
export const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]
        case actionTypes.TOGGLE_LIST:
            return state.map((todo) => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
        default: 
            return state;
    }
}
// export default todos;