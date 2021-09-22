import React from 'react'
import TodoItem from '../MyComponents/TodoItem.js';

function Todos(props) {
    return (
        <div className="container">
            <h3>Todos List</h3>
            <TodoItem todo={props.todo[0]}/>
        </div>
    )
}

export default Todos
