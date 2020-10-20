import React, { useState, useReducer, useEffect } from 'react';

const initialState = { x: 0, y: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'fresh':
            return { ...state, ...action.payload };
        default:
            return { ...state, ...action.payload };
    }
}
function Mouse(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div style={{ height: '100vh' }} onMouseMove={(e) => dispatch({ type: 'fresh', payload: { x: e.clientX, y: e.clientY } })}>
            <h2 style={{margin: '0'}}>请移动鼠标</h2>
            <div>当前的鼠标位置是{state.x}  {state.y}</div>
            {props.render(state)}
        </div>
    )
}
export default Mouse;