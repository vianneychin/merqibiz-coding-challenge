import React, { useState } from 'react'

const ToDoForm = props => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState('medium')
  const onSubmit = event => {
    event.preventDefault()
    props.createTodo([value, priority])
    setValue('')
  }
  const onChange = event => {
    setValue(event.target.value)
  }
  const onOptionChange = event => {
    setPriority(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={value} />
      <select value={priority} onChange={onOptionChange}>
        <option value='high'>High</option>
        <option value='medium' selected>
          Medium
        </option>
        <option value='low'>Low</option>
      </select>
      <button>Add To Do</button>
    </form>
  )
}

export default ToDoForm
