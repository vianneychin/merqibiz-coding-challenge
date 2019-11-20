import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'
import { AddTodoModal } from './AddTodoModal'
import { StyledButton } from '../styles/Button'

const App = () => {
  const [todos, setTodos] = useState([])
  const [isModalShowing, setIsModalShowing] = useState(false)
  const [rerender, setrerender] = useState(false)

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
      setrerender(true)
    }
  }
  const renderModal = () => {
    if (isModalShowing) {
      return (
        <AddTodoModal
          createTodo={todoText => {
            setTodos([...todos, todoText])
          }}
          hideModal={() => setIsModalShowing(false)}
        />
      )
    }
    if (!isModalShowing) {
      return ''
    }
  }

  useEffect(() => {
    const data = sessionStorage.getItem('my-todos')
    if (data) {
      setTodos(JSON.parse(data))
    }
  }, [])
  useEffect(() => {
    sessionStorage.setItem('my-todos', JSON.stringify(todos))
  }, [todos])

  return (
    <>
      {renderModal()}
      <MainContainer>
        <div>
          <div>
            <StyledButton
              bg='cornflowerblue'
              clr='rgb(240, 240, 240)'
              onClick={() => setIsModalShowing(true)}
            >
              Add a todo
            </StyledButton>
            <StyledButton onClick={sortTodos}>
              Sort by highest priority
            </StyledButton>
          </div>
          <div>
            <TodoList
              deleteTodo={todoIndex => {
                const newTodos = todos.filter((_, index) => index !== todoIndex)
                setTodos(newTodos)
              }}
              todos={todos}
              reRender={rerender}
            />
          </div>
        </div>
      </MainContainer>
    </>
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
  > div {
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div:nth-of-type(1) {
      flex: 0.1;
      display: flex;
      justify-content: space-between;
      > button {
        flex: 0.45;
      }
    }
    > div:nth-of-type(2) {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default App
