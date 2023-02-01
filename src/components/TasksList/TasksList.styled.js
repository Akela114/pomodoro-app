import styled from 'styled-components'

import Card from '../UI/Card'
import ButtonWithText from '../UI/Button/WithText'

export const Wrapper = styled(Card)`
  flex: 1;

  padding: 2.5rem 0;
`

export const TasksGroup = styled.div`
  padding: 0 1.81rem 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  max-height: 48rem;
  overflow-y: scroll;

  @media (max-width: 1399px) {
    gap: 1rem;
  }

  /* hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  /* hide scrollbar for chrome, safari and opera */
  &::-webkit-scrollbar {
    display: none;
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
  margin: 0 2.5rem;

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
