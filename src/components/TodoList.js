import React from 'react'

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button
            onClick={() => {
              props.editTodo(index)
            }}
          >
            Edit
          </button>
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
  )
}

export default TodoList
