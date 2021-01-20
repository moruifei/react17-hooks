import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions'

const AddTodo = ({ dispatch }) => {
    const inputRef = useRef();
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addTodo(inputRef.current.value));
                    inputRef.current.value = '';
                }}
            >
                <input type="text" ref={inputRef} />
                <button onCopy={()=>console.log('copy')} type="submit">add todo</button>
            </form>
        </div>
    )
}
export default connect()(AddTodo);