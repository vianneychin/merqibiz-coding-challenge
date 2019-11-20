import React, { useState } from 'react'
import { StyledButton } from '../styles/Button'
import styled from 'styled-components'

const ListItem = styled.li`
  margin-bottom: 20px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
`

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <TodoItem text={todo} item={todo} />
            <StyledButton
              onClick={() => {
                deleteTodo(index)
              }}
            >
              Delete
            </StyledButton>
          </ListItem>
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
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '2em', fontWeight: '300' }}>{value[0]}</p>
          <p style={{ fontSize: '2em', fontWeight: '300' }}>
            {value[1]} priority
          </p>
        </div>
      )
    }
  }
  const renderButton = () => {
    if (edit) {
      return <StyledButton onClick={() => setEdit(false)}>cancel</StyledButton>
    } else {
      return <StyledButton onClick={() => setEdit(true)}>edit</StyledButton>
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
