import React, { useState, useEffect } from 'react'
import Transition from 'react-transition-group/Transition'
import { useSelector, useDispatch } from 'react-redux'

import { timerSliceActions } from '../../../store/slices/timer'
import SettingsItem from './SettingsItem'
import {
  Card,
  Header,
  Body,
  SettingsGroup,
  SettingsBlock,
  Actions,
} from './SettingsWindow.styled'

import saveIcon from '../../../assets/icons/save.svg'
import tomatoFullIcon from '../../../assets/icons/tomato/tomato-full.svg'
import arrowLeftIcon from '../../../assets/icons/arrow-left.svg'

const notificationAnimationTime = 300
const notificationVisibilityTime = 3000

const SettingsWindow = props => {
  const dispatch = useDispatch()
  const settingsState = useSelector(state => state.timer.settings)

  const [pomodoroDuration, setPomodoroDuration] = useState('')
  const [shortBreakDuration, setShortBreakDuration] = useState('')
  const [longBreakDuration, setLongBreakDuration] = useState('')
  const [pomodorosBeforeLongBreak, setPomodorosBeforeLongBreak] = useState('')

  const [notification, setNotification] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    if (!props.isShown) return

    setPomodoroDuration(settingsState.timeSegmentsDuration.pomodoro)
    setShortBreakDuration(settingsState.timeSegmentsDuration.shortBreak)
    setLongBreakDuration(settingsState.timeSegmentsDuration.longBreak)
    setPomodorosBeforeLongBreak(settingsState.pomodorosBeforeLongBreak)
  }, [props.isShown])

  const handleSaveChanges = () => {
    dispatch(
      timerSliceActions.updateSetting({
        timeSegmentsDuration: {
          pomodoro: pomodoroDuration,
          shortBreak: shortBreakDuration,
          longBreak: longBreakDuration,
        },
        pomodorosBeforeLongBreak: pomodorosBeforeLongBreak,
      })
    )

    setNotification('Изменения успешно сохранены')

    if (timeoutId) clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(
      () => setNotification(null),
      notificationVisibilityTime
    )
    setTimeoutId(newTimeoutId)
  }

  return (
    <Transition
      in={props.isShown}
      timeout={props.animationTime}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <Card state={state} timeout={props.animationTime}>
          <Header>
            <Header.Title>Настройки таймера</Header.Title>
            <Header.Button
              bgIcon={arrowLeftIcon}
              onClick={props.onToggleDisplayedWindow}
            />
          </Header>
          <Body>
            <SettingsGroup>
              <SettingsBlock>
                <SettingsBlock.Header>
                  Продолжительность временных отрезков
                </SettingsBlock.Header>
                <SettingsBlock.Body>
                  <SettingsItem
                    name="Pomodoro"
                    labelText="мин"
                    inputId="settings-input-1"
                    value={pomodoroDuration}
                    onChange={val => setPomodoroDuration(val)}
                  />
                  <SettingsItem
                    name="Короткий перерыв"
                    labelText="мин"
                    inputId="settings-input-2"
                    value={shortBreakDuration}
                    onChange={val => setShortBreakDuration(val)}
                  />
                  <SettingsItem
                    name="Длинный перерыв"
                    labelText="мин"
                    inputId="settings-input-3"
                    value={longBreakDuration}
                    onChange={val => setLongBreakDuration(val)}
                  />
                </SettingsBlock.Body>
              </SettingsBlock>
              <SettingsBlock>
                <SettingsBlock.Header>Другое</SettingsBlock.Header>
                <SettingsBlock.Body>
                  <SettingsItem
                    name="Pomodoro-в до длинного перерыва"
                    labelIcon={tomatoFullIcon}
                    inputId="settings-input-4"
                    value={pomodorosBeforeLongBreak}
                    onChange={val => setPomodorosBeforeLongBreak(val)}
                  />
                </SettingsBlock.Body>
              </SettingsBlock>
            </SettingsGroup>
            <Actions>
              <Transition
                in={!!notification}
                timeout={notificationAnimationTime}
                mountOnEnter
                unmountOnExit
              >
                {state => (
                  <Actions.Notification
                    state={state}
                    timeout={notificationAnimationTime}
                  >
                    {notification}
                  </Actions.Notification>
                )}
              </Transition>
              <Transition
                in={!!notification}
                timeout={notificationAnimationTime}
              >
                {state => (
                  <Actions.Button
                    color="secondary"
                    onClick={handleSaveChanges}
                    state={state}
                    timeout={notificationAnimationTime}
                  >
                    <Actions.Button.Icon src={saveIcon} alt="Save Icon" />
                    <Actions.Button.Text>Сохранить</Actions.Button.Text>
                  </Actions.Button>
                )}
              </Transition>
            </Actions>
          </Body>
        </Card>
      )}
    </Transition>
  )
}

export default SettingsWindow
