import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { StyledButton } from '../styles/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'

export const AddTodoModal = ({ hideModal, createTodo }) => {
  const [value, setValue] = useState('')
  const [priority, setPriority] = useState('medium')

  const onSubmit = event => {
    event.preventDefault()
    createTodo([value, priority])
    setValue('')
    hideModal()
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
          <div style={{ marginTop: 20, marginBottom: 20 }}>
            <FormControl>
              <InputLabel htmlFor='age-customized-native-simple'>
                Priority
              </InputLabel>
              <NativeSelect value={priority} onChange={onOptionChange}>
                <option value='high'>high</option>
                <option value='medium'>medium</option>
                <option value='low'>low</option>
              </NativeSelect>
            </FormControl>
          </div>

          <StyledButton type='submit' variant='contained' color='primary'>
            Add
          </StyledButton>
        </form>
      </div>
    </ModalShadow>
  )
}

export const ModalShadow = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  height: 100%;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  > div {
    background-color: rgb(240, 240, 240);
    width: 60%;
    padding: 2%;
    border-radius: 0.5rem;
    > form {
      display: flex;
      flex-direction: column;
    }
  }
`
