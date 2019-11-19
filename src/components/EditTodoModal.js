import React, { useState } from 'react'
import { ModalShadow, StyledButton } from './AddTodoModal'
import TextField from '@material-ui/core/TextField'

export const EditTodoModal = ({ hideModal }) => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState('medium')

  const onSubmit = event => {
    // event.preventDefault()
    // createTodo([value, priority])
    // setValue('')
    // hideModal()
  }

  const onChange = event => {
    setValue(event.target.value)
  }

  const onOptionChange = event => {
    setPriority(event.target.value)
  }

  return (
    <ModalShadow onClick={() => hideModal()}>
      <div onClick={e => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <TextField
            onChange={onChange}
            value={value}
            variant='outlined'
            label='todo'
          />
          <div>
            <label>Priority:</label>{' '}
            <select value={priority} onChange={onOptionChange}>
              <option value='high'>High</option>
              <option value='medium' selected>
                Medium
              </option>
              <option value='low'>Low</option>
            </select>
          </div>

          <StyledButton type='submit' variant='contained' color='primary'>
            confirm
          </StyledButton>
        </form>
      </div>
    </ModalShadow>
  )
}
