import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const StyledButton = styled(Button).attrs(props => ({
  variant: 'contained',
  size: 'large'
}))`
  && {
    text-transform: lowercase;
    font-weight: bold;
    background-color: ${props => props.bg};
    color: ${props => props.clr};
    z-index: 0;
  }
`
