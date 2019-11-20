import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'

export const ListItem = styled.li`
  margin-bottom: 20px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
`

export const TextContent = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    font-size: 2em;
    font-weight: 300;
  }
`

export const StyledFormControl = styled(FormControl)`
  && {
    flex: 0.25;
    position: relative;
    left: 12%;
    bottom: 11px;
  }
`
