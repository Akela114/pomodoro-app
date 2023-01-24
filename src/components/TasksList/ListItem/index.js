import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDrag, useDrop } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'

import { secondsToHM } from '../../../helpers/formatSeconds'
import {
  Wrapper,
  Item,
  Title,
  RemainingTime,
  ActionsGroup,
} from './ListItem.styled'
import { tasksSliceActions } from '../../../store/slices/tasks'
import { dragItemTypes } from '../../../constants'
import FirstTask from '../FirstTask'

import editIcon from '../../../assets/icons/edit/edit-blue.svg'
import exitIcon from '../../../assets/icons/exit/exit-blue.svg'

const ListItem = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const itemRef = useRef()

  useEffect(() => {
    preview(getEmptyImage())
  }, [])

  useEffect(() => {
    return () => {
      if (props.task.remainingTime > 1) return

      props.onPlayAchievementAudio()
    }
  }, [props])

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: dragItemTypes.TASK,
      item: () => ({ id: props.task.id }),
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [props]
  )

  const [, drop] = useDrop(
    () => ({
      accept: dragItemTypes.TASK,
      collect: monitor => ({}),
      hover(item, monitor) {
        if (!itemRef.current) {
          return
        }
        const dragId = item.id
        const hoverId = props.task.id

        if (dragId === hoverId) return

        dispatch(
          tasksSliceActions.moveTask({
            dragId,
            hoverId,
          })
        )
      },
    }),
    [props.task]
  )

  drag(drop(itemRef))

  const handleShowEditTaskModal = () => {
    navigate(`/edit-task/${props.task.id}`)
  }

  const handleRemoveTask = () => {
    dispatch(tasksSliceActions.removeTask(props.task.id))
  }

  const handleCompleteTask = () => {
    dispatch(tasksSliceActions.removeTask(props.task.id))
    props.onPlayAchievementAudio()
  }

  const { hours, minutes } = secondsToHM(props.task.remainingTime)

  return (
    <Wrapper ref={itemRef} task={props.task} isDragging={isDragging}>
      {props.idx === 0 && (
        <FirstTask
          task={props.task}
          onShowEditTaskModal={handleShowEditTaskModal}
          onRemoveTask={handleRemoveTask}
          onCompleteTask={handleCompleteTask}
        />
      )}
      {props.idx !== 0 && (
        <Item>
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
        </Item>
      )}
    </Wrapper>
  )
}

export default ListItem
