import React, { useState, useEffect } from 'react'
import { StyledButton } from '../styles/Button'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import NativeSelect from '@material-ui/core/NativeSelect'

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

const TodoList = ({ todos, deleteTodo, reRender }) => {
  return (
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
  )
}

const TodoItem = ({ text, reRender }) => {
  const [edit, setEdit] = useState(false)
  const [textValue, setTextValue] = useState(text[0])
  const [priorityValue, setPriorityValue] = useState(text[1])
  const renderTodo = () => {
    if (edit) {
      return (
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <TextField
            fullWidth={true}
            autoFocus
            onChange={handleChange}
            value={textValue}
            style={{ flex: 0.5 }}
          />
          <FormControl
            style={{
              flex: 0.25,
              position: 'relative',
              left: '12%',
              bottom: '11px'
            }}
          >
            <InputLabel htmlFor='age-customized-native-simple'>
              Priority
            </InputLabel>
            <NativeSelect value={priorityValue} onChange={onPriorityChange}>
              <option value='high'>high</option>
              <option value='medium'>medium</option>
              <option value='low'>low</option>
            </NativeSelect>
          </FormControl>
        </form>
      )
    } else {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '2em', fontWeight: '300' }}>{textValue}</p>
          <p style={{ fontSize: '2em', fontWeight: '300' }}>
            {priorityValue} priority
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
    setTextValue(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setTextValue(textValue)
    setEdit(false)
  }
  const onPriorityChange = e => {
    setPriorityValue(e.target.value)
  }

  return (
    <>
      {renderTodo(text)}
      {renderButton()}
    </>
  )
}

export default TodoList
