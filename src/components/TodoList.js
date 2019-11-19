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
  const renderButton = () => {
    if (edit) {
      return <button onClick={() => setEdit(false)}>cancel</button>
    } else {
      return <button onClick={() => setEdit(true)}>Edit</button>
    }
  }
  return (
    <>
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {renderTodo(todo)}
            {renderButton()}
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
