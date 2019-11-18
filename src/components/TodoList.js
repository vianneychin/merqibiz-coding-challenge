import React from 'react'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index.toString()}>
          <input type='radio' />
          {todo}
          <button
            onClick={() => {
              deleteTodo(index)
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
