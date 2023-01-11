import React from 'react'

import {
  Card,
  Button,
  TimerData,
  MainInfo,
  Actions,
  Stats,
  StatsItem,
} from './Timer.styled'

import settingsIcon from '../../assets/icons/settings.svg'
import tomatoFullIcon from '../../assets/icons/tomato/tomato-full.svg'

const Timer = () => {
  return (
    <Card>
      <Button color="secondary" bgIcon={settingsIcon} />
      <TimerData>
        <MainInfo>
          <MainInfo.Event>до перерыва</MainInfo.Event>
          <MainInfo.Value>13:27</MainInfo.Value>
        </MainInfo>
        <Actions>
          <Actions.Action>пауза</Actions.Action>
          <Actions.Action>сбросить</Actions.Action>
        </Actions>
        <Stats>
          <StatsItem>
            <StatsItem.Data>
              <StatsItem.Img src={tomatoFullIcon} alt="Full tomato icon" />
              <StatsItem.Value>x2</StatsItem.Value>
            </StatsItem.Data>
            <StatsItem.Description>завершено сегодня</StatsItem.Description>
          </StatsItem>
          <StatsItem>
            <StatsItem.Data>
              <StatsItem.Img src={tomatoFullIcon} alt="Full pomodoro icon" />
              <StatsItem.Value>x2</StatsItem.Value>
            </StatsItem.Data>
            <StatsItem.Description>до длинного перерыва</StatsItem.Description>
          </StatsItem>
        </Stats>
      </TimerData>
    </Card>
  )
}

export default Timer
