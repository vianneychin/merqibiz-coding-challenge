import React, { useState } from 'react'
import { EditTodoModal } from './EditTodoModal'

const TodoList = props => {
  const [isEditModalShowing, setIsEditModalShowing] = useState(false)
  const renderEditTodoModal = () => {
    if (isEditModalShowing) {
      return <EditTodoModal hideModal={() => setIsEditModalShowing(false)} />
    } else {
      return ''
    }
  }
  return (
    <>
      {renderEditTodoModal()}
      <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => setIsEditModalShowing(true)}>Edit</button>
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
