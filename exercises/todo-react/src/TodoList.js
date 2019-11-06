import React from 'react'
import Todo from "./Todo"

function TodoList({todos, handleDelete, handleSave}) {
    const mappedTodos = todos.map(todo => (
        <Todo 
            key={todo._id} 
            {...todo} 
            handleDelete={handleDelete}
            handleSave={handleSave}
            />
        )
    )

    const style = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: "5px",
        marginTop: "20px"
    }

    return (
        <div style={style}>
            {mappedTodos}
        </div>
    )
}

export default TodoList
