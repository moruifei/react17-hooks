import * as actionTypes from '../consts/actionTypes';
let count = 0;
export const addTodo = text=>({ // 增加一条列表
    type: actionTypes.ADD_LIST,
    id: count++,
    text
})

export const toggleTodo = id=>({
    type: actionTypes.TOGGLE_LIST,
    id
})

export const setVisibleTodo = filter=>({
    type: actionTypes.SET_VISIBLE_LIST,
    filter
})