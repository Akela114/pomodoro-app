import React from 'react'
import Transition from 'react-transition-group/Transition'

import {
  Card,
  Button,
  TimerData,
  MainInfo,
  Actions,
  Stats,
  StatsItem,
} from './TimerWindow.styled'

import settingsIcon from '../../../assets/icons/settings.svg'
import tomatoFullIcon from '../../../assets/icons/tomato/tomato-full.svg'

const TimerWindow = props => {
  return (
    <Transition
      in={props.isShown}
      timeout={props.animationTime}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <Card state={state} timeout={props.animationTime}>
          <Button
            color="secondary"
            bgIcon={settingsIcon}
            onClick={props.onToggleDisplayedWindow}
          />
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
                  <StatsItem.Img
                    src={tomatoFullIcon}
                    alt="Full pomodoro icon"
                  />
                  <StatsItem.Value>x2</StatsItem.Value>
                </StatsItem.Data>
                <StatsItem.Description>
                  до длинного перерыва
                </StatsItem.Description>
              </StatsItem>
            </Stats>
          </TimerData>
        </Card>
      )}
    </Transition>
  )
}

export default TimerWindow
