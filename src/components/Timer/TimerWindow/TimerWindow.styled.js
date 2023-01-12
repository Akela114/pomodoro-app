import React from 'react'
import styled from 'styled-components'

import CardDefault from '../../UI/Card'
import TextLessButtonDefault from '../../UI/Button/TextLess'

export const Card = styled(CardDefault)`
  padding-left: 0;
  padding-right: 0;

  gap: 30px;
`

export const Button = styled(TextLessButtonDefault)`
  align-self: flex-end;

  margin-right: 29px;
`

export const TimerData = styled.div`
  flex: 1;

  padding: 60px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 80px;
`

export const MainInfo = styled.div`
  text-align: center;
`

MainInfo.Event = styled.div`
  font-size: 20px;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};
`

MainInfo.Value = styled.div`
  font-size: 100px;
  font-weight: 600;

  color: ${props => props.theme.colors.secondary.middle};
`

export const Actions = styled.ul`
  width: 100%;
  padding: 0 29px;

  list-style: none;

  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondary.middle};
`

const ActionButton = styled.button`
  padding: 8px 0;

  min-width: 150px;
  text-align: center;

  font-size: 20px;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  background-color: transparent;
  border: 0;

  cursor: pointer;

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
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
  margin: 0 29px;
  align-self: stretch;

  display: flex;

  border: 2px solid ${props => props.theme.colors.secondary.middle};
  border-radius: 20px;
`

export const StatsItem = styled.li`
  padding: 16px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 158px;
`

StatsItem.Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

StatsItem.Img = styled.img`
  width: 26px;
  height: 26px;
`

StatsItem.Value = styled.span`
  font-size: 20px;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};
`

StatsItem.Description = styled.div`
  font-size: 16px;
  font-weight: 500;

  color: ${props => props.theme.colors.secondary.middle};

  text-align: center;
`
