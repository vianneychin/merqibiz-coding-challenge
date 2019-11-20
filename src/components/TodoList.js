import React from 'react'
import TodoItem from './TodoItem'
import { StyledButton } from '../styles/Button'
import { ListItem } from '../styles'

const TodoList = ({ todos, deleteTodo }) => {
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

export default TodoList
