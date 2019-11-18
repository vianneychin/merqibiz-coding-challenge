import React, { useState } from 'react'

const ToDoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('')
  const onSubmit = event => {
    event.preventDefault()
    saveTodo(value)
    setValue('')
  }
  const onChange = event => {
    setValue(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} />
    </form>
  )
}

export default ToDoForm
