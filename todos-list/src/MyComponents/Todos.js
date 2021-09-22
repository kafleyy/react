import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    return (
        <div className="container">
            <h3>Todos List</h3>
            {/* {props.todos} */}
            <TodoItem todo = {todos}/>
        </div>
    )
}

export default Todos
