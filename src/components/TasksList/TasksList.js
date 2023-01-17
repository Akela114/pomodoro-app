import styled from 'styled-components'
import ButtonWithText from '../UI/Button/WithText'

export const TasksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TasksList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Button = styled(ButtonWithText)`
  align-self: flex-end;
`
