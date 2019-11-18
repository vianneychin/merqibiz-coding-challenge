import React, { useState } from 'react'
import styled from 'styled-components'
import TodoForm from './TodoForm'
import ToDoList from './TodoList'

const App = () => {
  const [todos, setTodos] = useState([])
  return (
    <MainContainer>
      <TodoForm
        createTodo={todoText => {
          const trimmedText = todoText.trim()

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText])
          }
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
