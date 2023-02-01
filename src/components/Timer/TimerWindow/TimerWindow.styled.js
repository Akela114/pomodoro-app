import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import CardDefault from '../../UI/Card'
import TextLessButtonDefault from '../../UI/Button/TextLess'

export const Card = styled(CardDefault)`
  width: 100%;
  flex-shrink: 0;

  padding-left: 0;
  padding-right: 0;

  justify-content: space-between;

  box-shadow: none;
  border-radius: 0;

  @media (min-width: 1125px) {
    ${props =>
      props.state === 'entering'
        ? css`
            animation: ${slideInAnimation} ${props.timeout}ms ease-out forwards;
          `
        : ''}

    ${props =>
      props.state === 'exiting'
        ? css`
            animation: ${slideOutAnimation} ${props.timeout}ms ease-out forwards;
          `
        : ''}
  }

  @media (max-width: 1124px) {
    padding: 0;
    position: relative;
  }
`

export const Button = styled(TextLessButtonDefault)`
  align-self: flex-end;

  margin-right: 1.81rem;

  @media (max-width: 1124px) {
    width: 2.18rem;
    height: 2.18rem;

    margin-right: 0;
    position: absolute;
    border-radius: 0 0 0 1.25rem;

    ${props =>
      props.bgIcon
        ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1rem 1rem;`
        : ''};
  }
`

export const TimerData = styled.div`
  flex: 1;

  padding: 3.75rem 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1.87rem;

  @media (max-width: 1124px) {
    padding: 1.25rem 0 0;
    gap: 0.5rem;
  }
`

export const MainInfo = styled.div`
  width: 100%;
  text-align: center;
`

MainInfo.Event = styled.div`
  font-size: 1.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};

  @media (max-width: 1124px) {
    font-size: 1.12rem;
  }
`

MainInfo.Value = styled.div`
  display: flex;
  justify-content: center;

  font-size: 6.25rem;
  font-weight: 600;
  gap: 0.5rem;

  color: ${props => props.theme.colors.secondary.middle};

  @media (max-width: 1124px) {
    font-size: 3.75rem;
  }
`

MainInfo.Minutes = styled.span`
  flex: 1;
  text-align: right;
`

MainInfo.Seconds = styled.span`
  flex: 1;
  text-align: left;
`

export const Actions = styled.ul`
  width: 100%;
  padding: 0 1.81rem;

  list-style: none;

  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary.middle};
`

const ActionButton = styled.button`
  padding: 0.5rem 0;

  min-width: 9.37rem;
  text-align: center;

  font-size: 1.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  background-color: transparent;
  border: 0;

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }

  @media (max-width: 1124px) {
    font-size: 1.12rem;
  }
`

Actions.Action = props => {
  return (
    <li>
      <ActionButton {...props}>{props.children}</ActionButton>
    </li>
  )
}

export const Stats = styled.ul`
  margin: 0 1.81rem;
  align-self: stretch;

  display: flex;

  border: 2px solid ${props => props.theme.colors.secondary.middle};
  border-radius: 1.25rem;

  @media (max-width: 1124px) {
    display: none;
  }
`

export const StatsItem = styled.li`
  padding: 1rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;

  height: 9.87rem;

  @media (max-width: 1399px) {
    padding: 0.75rem;
  }
`

StatsItem.Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.62rem;
`

StatsItem.Img = styled.img`
  width: 1.61rem;
  height: 1.61rem;

  @media (max-width: 1399px) {
    width: 1.37rem;
    height: 1.37rem;
  }
`

StatsItem.Value = styled.span`
  font-size: 1.25rem;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};

  @media (max-width: 1399px) {
    font-size: 1.06rem;
  }
`

StatsItem.Description = styled.div`
  font-size: 1rem;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};

  text-align: center;
`

// Animations
const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`
