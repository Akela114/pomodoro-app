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
  gap: 12px;

  background-color: ${props => props.theme.colors.tertiary.middle};
  color: ${props => props.theme.colors.white};
`

Header.Title = styled.h2`
  font-size: 16px;
  font-weight: 500;

  text-overflow: ellipsis;

  @media (max-width: 1399px) {
    font-size: 15px;
  }
`

Header.ActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 399px) {
    flex-direction: column-reverse;
  }
`

Header.Action = styled.button`
  width: 21px;
  height: 21px;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 21px 21px;`
      : ''};
`

export const Body = styled.div`
  padding: 20px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: 329px) {
    display: none;
  }
`

Body.RemainingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

Body.TimeImage = styled.img`
  width: 28px;
  height: 28px;

  @media (max-width: 1399px) {
    width: 26px;
    height: 26px;
  }
`

Body.TimeValue = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 14px;
  }
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

  @media (max-width: 1399px) {
    padding: 8px 16px;
    gap: 6px;
  }

  @media (max-width: 699px) {
    display: none;
  }
`

const PomodoroItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

const PomodoroImage = styled.img`
  width: 22px;
  height: 22px;

  @media (max-width: 1399px) {
    width: 20px;
    height: 20px;
  }
`

const PomodoroText = styled.span`
  margin-left: 2px;
  margin-right: 8px;

  font-size: 14px;
  color: ${props =>
    props.color === 'primary'
      ? props.theme.colors.primary.middle
      : props.theme.colors.secondary.middle};

  @media (max-width: 1399px) {
    margin-right: 6px;
    font-size: 13px;
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
  width: 32px;
  height: 32px;

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

  @media (max-width: 1399px) {
    width: 30px;
    height: 30px;
  }
`
