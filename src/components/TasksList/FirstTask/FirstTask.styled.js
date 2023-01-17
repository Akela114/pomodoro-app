import React from 'react'
import styled from 'styled-components'

import TextLessButton from '../../UI/Button/TextLess'

export const Wrapper = styled.div`
  border-radius: 20px;
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.medium};
`

export const Header = styled.header`
  padding: 12px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.tertiary.middle};
  color: ${props => props.theme.colors.white};
`

Header.Title = styled.h2`
  font-size: 17px;
  font-weight: 500;
`

Header.ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

Header.Action = styled.button`
  width: 22px;
  height: 22px;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 22px 22px;`
      : ''};
`

export const Body = styled.div`
  padding: 20px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

Body.RemainingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

Body.TimeImage = styled.img`
  width: 30px;
  height: 30px;
`

Body.TimeValue = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.colors.primary.dark};
`

Body.ElementsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

Body.PomodorosRemaining = styled.ul`
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px solid ${props => props.theme.colors.tertiary.middle};
  border-radius: 100px;

  list-style: none;
`

const PomodoroItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PomodoroImage = styled.img`
  width: 25px;
  height: 25px;
`

Body.PomodorosRemainingItem = props => {
  return (
    <PomodoroItem>
      <PomodoroImage {...props} />
    </PomodoroItem>
  )
}

Body.Button = styled(TextLessButton)`
  width: 35px;
  height: 35px;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 17px 17px;`
      : ''};

  background-color: ${props => props.theme.colors.tertiary.middle};

  &:active {
    background-color: ${props => props.theme.colors.tertiary.dark};
  }
`
