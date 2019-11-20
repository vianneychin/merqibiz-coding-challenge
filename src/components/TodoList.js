import React, { useState } from 'react'
const TodoList = ({ todos, deleteTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem text={todo} item={todo} />
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
      return <button onClick={() => setEdit(false)}>cancel</button>
    } else {
      return <button onClick={() => setEdit(true)}>Edit</button>
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
