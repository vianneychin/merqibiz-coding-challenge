import React from 'react'

const TodoList = props => {
  return (
    <ul>
      <button>Sort by Highest Priority</button>
      {props.todos.map((todo, index) => (
        <li key={index}>
          {todo}
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
