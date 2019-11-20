import React, { useState } from 'react'
import { StyledButton } from '../styles/Button'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem text={todo} item={todo} />
            <StyledButton
              onClick={() => {
                deleteTodo(index)
              }}
            >
              Delete
            </StyledButton>
          </li>
        ))}
      </ul>
    </>
  )
}

const TodoItem = ({ text }) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(text)
  const renderTodo = () => {
    if (edit) {
      return (
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={value} />
        </form>
      )
    } else {
      return <p>{value}</p>
    }
  }
  const renderButton = () => {
    if (edit) {
      return <StyledButton onClick={() => setEdit(false)}>cancel</StyledButton>
    } else {
      return <StyledButton onClick={() => setEdit(true)}>Edit</StyledButton>
    }
  }
  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setValue(value)
    setEdit(false)
  }
  return (
    <>
      {renderTodo(text)}
      {renderButton()}
    </>
  )
}

export default TodoList
