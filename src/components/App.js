import React, { useState } from 'react'
import styled from 'styled-components'
import TodoForm from './TodoForm'
import ToDoList from './TodoList'

const App = () => {
  const [todos, setTodos] = useState([])

  const sortTodos = () => {
    let highPriority = []
    let mediumPriority = []
    let lowPriority = []
    for (let i = 0; i <= todos.length - 1; i++) {
      if (todos[i][1] === 'medium') {
        mediumPriority.push(todos[i])
      }
      if (todos[i][1] === 'high') {
        highPriority.push(todos[i])
      }
      if (todos[i][1] === 'low') {
        lowPriority.push(todos[i])
      }
      setTodos([...highPriority, ...mediumPriority, ...lowPriority])
    }
  }

  return (
    <MainContainer>
      <button onClick={sortTodos}>Sort by highest priority.</button>
      <TodoForm
        createTodo={todoText => {
          setTodos([...todos, todoText])
        }}
      />
      <ToDoList
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex)
          setTodos(newTodos)
        }}
        todos={todos}
      />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  height: 100%;
  width: 100vw;
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default App
