import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { StyledButton } from '../styles/Button'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
import { ModalShadow } from '../styles/Modal'

const AddTodoModal = ({ hideModal, createTodo }) => {
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
          <div>
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
          <StyledButton type='submit' color='primary'>
            Add
          </StyledButton>
        </form>
      </div>
    </ModalShadow>
  )
}

export default AddTodoModal
