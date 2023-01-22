import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { secondsToHM } from '../../../helpers/formatSeconds'
import { Wrapper, Title, RemainingTime, ActionsGroup } from './ListItem.styled'
import { tasksSliceActions } from '../../../store/slices/tasks'

import editIcon from '../../../assets/icons/edit/edit-blue.svg'
import exitIcon from '../../../assets/icons/exit/exit-blue.svg'

const ListItem = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShowEditTaskModal = () => {
    navigate(`/edit-task/${props.task.id}`)
  }

  const handleRemoveTask = () => {
    dispatch(tasksSliceActions.removeTask(props.task.id))
  }

  const { hours, minutes } = secondsToHM(props.task.remainingTime)

  return (
    <Wrapper>
      <Title>
        {props.task.title}{' '}
        <RemainingTime>
          ({hours}:{minutes})
        </RemainingTime>
      </Title>
      <ActionsGroup>
        <ActionsGroup.Action
          bgIcon={editIcon}
          onClick={handleShowEditTaskModal}
        />
        <ActionsGroup.Action bgIcon={exitIcon} onClick={handleRemoveTask} />
      </ActionsGroup>
    </Wrapper>
  )
}

export default ListItem
