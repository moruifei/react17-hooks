import React from 'react';
import Todo from './todo';


const TodoList = ({todos, toggleTodo})=>{
    console.log(todos, 'todos')
    return (
        <ul>
            {todos.map((todo)=>{
                return <Todo key={todo.id} {...todo} onClick={()=>toggleTodo(todo.id)}/>
            })}
        </ul>
    )
}
export default TodoList;