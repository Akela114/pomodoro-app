import React, { useState, useEffect } from 'react'
import Transition from 'react-transition-group/Transition'
import { useSelector, useDispatch } from 'react-redux'

import { timerSliceActions } from '../../../../store/slices/timer'
import SettingsItem from '../SettingsItem/'

import {
  Form,
  SettingsGroup,
  SettingsBlock,
  Actions,
} from './SettingsWindowForm.styled'

import saveIcon from '../../../../assets/icons/save.svg'
import tomatoFullIcon from '../../../../assets/icons/tomato/tomato-full.svg'

const notificationAnimationTime = 300
const notificationVisibilityTime = 3000

const SettingsWindowForm = () => {
  const dispatch = useDispatch()
  const settingsState = useSelector(state => state.timer.settings)

  const [pomodoroDuration, setPomodoroDuration] = useState('')
  const [shortBreakDuration, setShortBreakDuration] = useState('')
  const [longBreakDuration, setLongBreakDuration] = useState('')
  const [pomodorosBeforeLongBreak, setPomodorosBeforeLongBreak] = useState('')
  const [focusedInputId, setFocusedInputId] = useState(null)

  const [notification, setNotification] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    setPomodoroDuration(settingsState.timeSegmentsDuration.pomodoro)
    setShortBreakDuration(settingsState.timeSegmentsDuration.shortBreak)
    setLongBreakDuration(settingsState.timeSegmentsDuration.longBreak)
    setPomodorosBeforeLongBreak(settingsState.pomodorosBeforeLongBreak)
  }, [])

  const handleSaveChanges = e => {
    e.preventDefault()

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

  const handleChangeFocusedInput = id => {
    switch (id) {
      case 'settings-input-1':
        setFocusedInputId('settings-input-2')
        break
      case 'settings-input-2':
        setFocusedInputId('settings-input-3')
        break
      case 'settings-input-3':
        setFocusedInputId('settings-input-4')
        break
      case 'settings-input-4':
        setFocusedInputId('settings-input-1')
        break
    }
  }

  return (
    <Form onSubmit={handleSaveChanges}>
      <SettingsGroup>
        <SettingsBlock>
          <SettingsBlock.Header>
            Продолжительность временных отрезков
          </SettingsBlock.Header>
          <SettingsBlock.Body>
            <SettingsItem
              name="Помидорка"
              labelText="мин"
              inputId="settings-input-1"
              isFocused={focusedInputId === 'settings-input-1'}
              value={pomodoroDuration}
              onChange={val => setPomodoroDuration(val)}
              onFocus={() => setFocusedInputId('settings-input-1')}
              onBlur={() => setFocusedInputId(null)}
              onFocusedInputChange={handleChangeFocusedInput}
            />
            <SettingsItem
              name="Короткий перерыв"
              labelText="мин"
              inputId="settings-input-2"
              isFocused={focusedInputId === 'settings-input-2'}
              value={shortBreakDuration}
              onChange={val => setShortBreakDuration(val)}
              onFocus={() => setFocusedInputId('settings-input-2')}
              onBlur={() => setFocusedInputId(null)}
              onFocusedInputChange={handleChangeFocusedInput}
            />
            <SettingsItem
              name="Длинный перерыв"
              labelText="мин"
              inputId="settings-input-3"
              isFocused={focusedInputId === 'settings-input-3'}
              value={longBreakDuration}
              onChange={val => setLongBreakDuration(val)}
              onFocus={() => setFocusedInputId('settings-input-3')}
              onBlur={() => setFocusedInputId(null)}
              onFocusedInputChange={handleChangeFocusedInput}
            />
          </SettingsBlock.Body>
        </SettingsBlock>
        <SettingsBlock>
          <SettingsBlock.Header>Другое</SettingsBlock.Header>
          <SettingsBlock.Body>
            <SettingsItem
              name="Помидорок до длинного перерыва"
              labelIcon={tomatoFullIcon}
              inputId="settings-input-4"
              isFocused={focusedInputId === 'settings-input-4'}
              value={pomodorosBeforeLongBreak}
              onChange={val => setPomodorosBeforeLongBreak(val)}
              onFocus={() => setFocusedInputId('settings-input-4')}
              onBlur={() => setFocusedInputId(null)}
              onFocusedInputChange={handleChangeFocusedInput}
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
        <Transition in={!!notification} timeout={notificationAnimationTime}>
          {state => (
            <Actions.Button
              type="submit"
              color="secondary"
              state={state}
              timeout={notificationAnimationTime}
            >
              <Actions.Button.Icon src={saveIcon} alt="Save Icon" />
              <Actions.Button.Text>Сохранить</Actions.Button.Text>
            </Actions.Button>
          )}
        </Transition>
      </Actions>
    </Form>
  )
}

export default SettingsWindowForm
