import styled from 'styled-components'

import Card from '../UI/Card'
import ButtonWithText from '../UI/Button/WithText'

export const Wrapper = styled(Card)`
  flex: 1;
`

export const TasksGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 1399px) {
    gap: 1rem;
  }
`

export const TasksList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 1399px) {
    gap: 1rem;
  }
`

export const Button = styled(ButtonWithText)`
  align-self: flex-end;
`

export const Message = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${props => props.theme.colors.tertiary.dark};
  text-align: center;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1124px) {
    font-size: 1.12rem;
  }

  @media (max-width: 499px) {
    font-size: 1.06rem;
  }
`
