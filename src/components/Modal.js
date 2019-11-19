import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const Modal = ({ hideModal }) => (
  <ModalShadow onClick={e => hideModal()}>
    <div onClick={e => e.stopPropagation()}>
      <TextField variant='outlined' label='todo' />
      <StyledButton variant='contained' color='primary'>
        Add
      </StyledButton>
    </div>
  </ModalShadow>
)

const ModalShadow = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  height: 100%;
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    background-color: rgb(240, 240, 240);
    height: 30%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2%;
    border-radius: 0.5rem;
  }
`
const StyledButton = styled(Button)`
  && {
    text-transform: lowercase;
  }
`
