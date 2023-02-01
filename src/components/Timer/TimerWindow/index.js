import React, { useEffect, useState } from 'react'
import Transition from 'react-transition-group/Transition'
import { useSelector, useDispatch } from 'react-redux'

import {
  Card,
  Button,
  TimerData,
  MainInfo,
  Actions,
  Stats,
  StatsItem,
} from './TimerWindow.styled'
import { formatSeconds } from '../../../helpers'
import { startTimer } from '../../../store/slices/timer/timerThunks'
import { timerSliceActions } from '../../../store/slices/timer'

import settingsIcon from '../../../assets/icons/settings.svg'
import tomatoFullIcon from '../../../assets/icons/tomato/tomato-full.svg'
import notificationSoundEffect from '../../../assets/audio/effects/notification.wav'

const notificationAudio = new Audio(notificationSoundEffect)
notificationAudio.volume = 0.1

const TimerWindow = props => {
  const dispatch = useDispatch()

  const timerState = useSelector(state => state.timer)

  useEffect(() => {
    return () => {
      if (timerState.currentEvent.remainingTime > 1) return

      notificationAudio.pause()
      notificationAudio.currentTime = 0
      notificationAudio.play()
    }
  }, [timerState])

  const handleTimerStart = () => {
    dispatch(startTimer())
  }

  const handleTimerPause = () => {
    dispatch(timerSliceActions.pauseTimer())
  }

  const handleTimerStop = () => {
    dispatch(timerSliceActions.stopTimer())
  }

  const eventInfo =
    timerState.currentEvent.type === 'pomodoro'
      ? 'до перерыва'
      : timerState.currentEvent.type === 'shortBreak'
      ? 'короткий перерыв'
      : 'длинный перерыв'
  const eventRemainingTime = formatSeconds.secondsToMS(
    timerState.currentEvent.remainingTime
  )

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
              <MainInfo.Event>{eventInfo}</MainInfo.Event>
              <MainInfo.Value>
                <MainInfo.Minutes>
                  {eventRemainingTime.minutes}
                </MainInfo.Minutes>
                :
                <MainInfo.Seconds>
                  {eventRemainingTime.seconds}
                </MainInfo.Seconds>
              </MainInfo.Value>
            </MainInfo>
            <Actions>
              {timerState.currentEvent.isActive ? (
                <Actions.Action onClick={handleTimerPause}>
                  пауза
                </Actions.Action>
              ) : (
                <Actions.Action onClick={handleTimerStart}>
                  {timerState.currentEvent.isTriggered
                    ? 'продолжить'
                    : 'начать'}
                </Actions.Action>
              )}
              {timerState.currentEvent.isTriggered && (
                <Actions.Action onClick={handleTimerStop}>
                  сбросить
                </Actions.Action>
              )}
            </Actions>
            <Stats>
              <StatsItem>
                <StatsItem.Data>
                  <StatsItem.Img src={tomatoFullIcon} alt="Full tomato icon" />
                  <StatsItem.Value>
                    x{timerState.statistics.pomodorosFinishedToday}
                  </StatsItem.Value>
                </StatsItem.Data>
                <StatsItem.Description>
                  завершено за сессию
                </StatsItem.Description>
              </StatsItem>
              <StatsItem>
                <StatsItem.Data>
                  <StatsItem.Img
                    src={tomatoFullIcon}
                    alt="Full pomodoro icon"
                  />
                  <StatsItem.Value>
                    x{timerState.statistics.pomodorosBeforeLongBreak}
                  </StatsItem.Value>
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
