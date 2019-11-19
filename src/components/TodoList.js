import React, { useState } from 'react'

const TodoList = props => {
  const [edit, setEdit] = useState(false)
  const renderTodo = txt => {
    if (edit) {
      return <input value={txt} />
    } else {
      return <p>{txt}</p>
    }
  }
  return (
    <>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {renderTodo(todo)}
            <button onClick={() => setEdit(true)}>Edit</button>
            <button
              onClick={() => {
                props.deleteTodo(index)
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
