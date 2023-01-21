import React, { useState, useRef, useEffect } from 'react'
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

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDuration, setTaskDuration] = useState('30')
  const [warningMessage, setWarningMessage] = useState(null)

  useEffect(() => {
    setTimeout(() => taskTitleInputRef.current.focus())
  }, [])

  const handleTaskTitleChange = e => {
    const value = e.target.value

    setTaskTitle(value)
    if (warningMessage && value !== '') setWarningMessage(null)
  }

  const handleTaskDurationChange = e => {
    let targetValue = e.target.value

    const regEx = /^[1-9][0-9]{0,2}$/
    if (targetValue !== '' && !regEx.test(targetValue)) return

    setTaskDuration(targetValue)
  }

  const handleTaskDurationBlur = e => {
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
  }

  const handleTaskDurationDecrement = () => {
    setTaskDuration(prev => {
      const value = String(+prev - 1)

      const regEx = /^[1-9][0-9]{0,2}$/
      if (value !== '' && !regEx.test(value)) return prev

      return value
    })
  }

  const handleAddNewTask = e => {
    e.preventDefault()

    if (taskTitle === '') {
      taskTitleInputRef.current.focus()
      setWarningMessage('Поле "название задачи" не должно быть пустым')
      return
    }

    props.onAddNewTask(taskTitle, +taskDuration)

    setTaskTitle('')
    setTaskDuration('30')

    taskTitleInputRef.current.focus()
  }

  const pomodorosForDuration =
    Math.ceil((+taskDuration / pomodoroDuration) * 10) / 10

  return (
    <Form onSubmit={handleAddNewTask}>
      <Controls>
        {warningMessage && (
          <Controls.WarningMessage>{warningMessage}</Controls.WarningMessage>
        )}
        <Controls.TitleControl
          type="text"
          placeholder="Введите название задачи..."
          value={taskTitle}
          onChange={handleTaskTitleChange}
          ref={taskTitleInputRef}
          warning={warningMessage ? true : false}
        />
        <Controls.DurationControlWrapper>
          <InputBlock>
            <InputBlock.Icon src={tomatoFullIcon} alt="Tomato Full Icon" />
            <InputBlock.Factor>
              x
              {pomodorosForDuration < 10
                ? pomodorosForDuration
                : Math.floor(pomodoroDuration)}
            </InputBlock.Factor>
            <InputBlock.Input
              type="text"
              value={taskDuration}
              onChange={handleTaskDurationChange}
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
      <Action type="submit">Добавить</Action>
    </Form>
  )
}

export default ModalForm
