import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import {
  Form,
  Controls,
  InputBlock,
  InputActions,
  Action,
} from '../../../UI/Modal/ModalWindowForm'

import tomatoFullIcon from '../../../../assets/icons/tomato/tomato-full.svg'
import chevronUpIcon from '../../../../assets/icons/chevron-up.svg'
import chevronDownIcon from '../../../../assets/icons/chevron-down.svg'

const ModalForm = props => {
  const taskTitleInputRef = useRef(null)

  const pomodoroDuration = useSelector(
    state => state.timer.settings.timeSegmentsDuration.pomodoro
  )

  const [taskTitle, setTaskTitle] = useState(props.task.title)
  const [taskDuration, setTaskDuration] = useState(
    Math.ceil(props.task.remainingTime / 60)
  )
  const [warningMessage, setWarningMessage] = useState(null)
  const [titleIsChanged, setTitleIsChanged] = useState(false)
  const [durationIsChanged, setDurationIsChanged] = useState(false)

  useEffect(() => {
    const handleTryToHideModal = e => {
      if (e.key === 'Escape') props.onHideModal()
    }

    window.addEventListener('keydown', handleTryToHideModal)
    return () => window.removeEventListener('keydown', handleTryToHideModal)
  }, [])

  const handleTaskTitleChange = e => {
    const value = e.target.value

    setTaskTitle(value)
    if (warningMessage && value !== '') setWarningMessage(null)

    if (!titleIsChanged) setTitleIsChanged(true)
  }

  const handleTaskDurationChange = e => {
    let targetValue = e.target.value

    const regEx = /^[1-9][0-9]{0,2}$/
    if (targetValue !== '' && !regEx.test(targetValue)) return

    setTaskDuration(targetValue)
    if (!durationIsChanged) setDurationIsChanged(true)
  }

  const handleTryToChangeValue = useCallback(e => {
    switch (e.key) {
      case 'ArrowUp':
        handleTaskDurationIncrement()
        break
      case 'ArrowDown':
        handleTaskDurationDecrement()
        break
      case 'Tab':
        e.preventDefault()
        taskTitleInputRef.current.focus()
        break
    }
  }, [])

  const handleTaskDurationFocus = () => {
    window.addEventListener('keydown', handleTryToChangeValue)
  }

  const handleTaskDurationBlur = e => {
    window.removeEventListener('keydown', handleTryToChangeValue)

    let targetValue = e.target.value

    if (targetValue !== '') return

    setTaskDuration('1')
  }

  const handleTaskDurationIncrement = () => {
    setTaskDuration(prev => {
      const value = String(+prev + 1)

      const regEx = /^[1-9][0-9]{0,2}$/
      if (value !== '' && !regEx.test(value)) return prev

      return value
    })

    if (!durationIsChanged) setDurationIsChanged(true)
  }

  const handleTaskDurationDecrement = () => {
    setTaskDuration(prev => {
      const value = String(+prev - 1)

      const regEx = /^[1-9][0-9]{0,2}$/
      if (value !== '' && !regEx.test(value)) return prev

      return value
    })

    if (!durationIsChanged) setDurationIsChanged(true)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (taskTitle === '') {
      taskTitleInputRef.current.focus()
      setWarningMessage('Поле "название задачи" не должно быть пустым')
      return
    }

    props.onEditTask(
      titleIsChanged ? taskTitle : null,
      durationIsChanged ? +taskDuration : null
    )
  }

  const pomodorosForDuration =
    Math.ceil((+taskDuration / pomodoroDuration) * 10) / 10

  return (
    <Form onSubmit={handleSubmit}>
      <Controls>
        {warningMessage && (
          <Controls.WarningMessage>{warningMessage}</Controls.WarningMessage>
        )}
        <Controls.TitleControl
          ref={taskTitleInputRef}
          type="text"
          value={taskTitle}
          placeholder="Введите название задачи..."
          onChange={handleTaskTitleChange}
          warning={warningMessage ? true : false}
        />
        <Controls.DurationControlWrapper>
          <InputBlock>
            <InputBlock.Icon src={tomatoFullIcon} alt="Tomato Full Icon" />
            <InputBlock.Factor>
              x
              {pomodorosForDuration < 10
                ? pomodorosForDuration
                : Math.floor(pomodorosForDuration)}
            </InputBlock.Factor>
            <InputBlock.Input
              type="text"
              value={taskDuration}
              onChange={handleTaskDurationChange}
              onFocus={handleTaskDurationFocus}
              onBlur={handleTaskDurationBlur}
            />
            <InputBlock.Unit>мин</InputBlock.Unit>
          </InputBlock>
          <InputActions>
            <InputActions.Button
              bgIcon={chevronUpIcon}
              type="button"
              onClick={handleTaskDurationIncrement}
            />
            <InputActions.Button
              bgIcon={chevronDownIcon}
              type="button"
              onClick={handleTaskDurationDecrement}
            />
          </InputActions>
        </Controls.DurationControlWrapper>
      </Controls>
      <Action type="submit">Сохранить</Action>
    </Form>
  )
}

export default ModalForm
