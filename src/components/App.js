import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import { AddTodoModal } from './AddTodoModal'
import { StyledButton } from '../styles/Button'
import { MainContainer } from '../styles'

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

export default App
