import React from 'react'
import styled from 'styled-components'

import TextLessButton from '../../UI/Button/TextLess'

export const Wrapper = styled.div`
  border-radius: 1.25rem;
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.medium};
`

export const Header = styled.header`
  padding: 0.75rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  background-color: ${props => props.theme.colors.tertiary.middle};
  color: ${props => props.theme.colors.white};
`

Header.Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;

  text-overflow: ellipsis;

  @media (max-width: 1399px) {
    font-size: 0.93rem;
  }
`

Header.ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;

  @media (max-width: 399px) {
    flex-direction: column-reverse;
  }
`

Header.Action = styled.button`
  width: 1.31rem;
  height: 1.31rem;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.31rem 1.31rem;`
      : ''};
`

export const Body = styled.div`
  padding: 1.25rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 329px) {
    display: none;
  }
`

Body.RemainingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

Body.TimeImage = styled.img`
  width: 1.75rem;
  height: 1.75rem;

  @media (max-width: 1399px) {
    width: 1.61rem;
    height: 1.61rem;
  }
`

Body.TimeValue = styled.span`
  font-size: 0.93rem;
  font-weight: 400;
  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 0.87rem;
  }
`

Body.ElementsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`

Body.PomodorosRemaining = styled.ul`
  padding: 0.62rem 1.25rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  border: 1px solid ${props => props.theme.colors.tertiary.middle};
  border-radius: 6.25rem;

  list-style: none;

  @media (max-width: 1399px) {
    padding: 0.5rem 1rem;
    gap: 0.37rem;
  }

  @media (max-width: 699px) {
    display: none;
  }
`

const PomodoroItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`

const PomodoroImage = styled.img`
  width: 1.37rem;
  height: 1.37rem;

  @media (max-width: 1399px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const PomodoroText = styled.span`
  margin-left: 2px;
  margin-right: 0.5rem;

  font-size: 0.87rem;
  color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary.middle
      : props.theme.colors.secondary.middle};

  @media (max-width: 1399px) {
    margin-right: 0.37rem;
    font-size: 0.81rem;
  }
`

Body.PomodorosRemainingItem = props => {
  return (
    <PomodoroItem>
      <PomodoroImage src={props.src} alt={props.alt} />
      {props.children && (
        <PomodoroText color={props.color}>{props.children}</PomodoroText>
      )}
    </PomodoroItem>
  )
}

Body.Button = styled(TextLessButton)`
  width: 2rem;
  height: 2rem;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.06rem 1.06rem;`
      : ''};

  background-color: ${props => props.theme.colors.tertiary.middle};

  &:active {
    background-color: ${props => props.theme.colors.tertiary.dark};
  }

  @media (max-width: 1399px) {
    width: 1.87rem;
    height: 1.87rem;
  }
`
