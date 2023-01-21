import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import ModalWindow from '../../UI/Modal'
import ModalForm from './ModalForm'

import { tasksSliceActions } from '../../../store/slices/tasks'

const EditTaskModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { taskId } = useParams()
  const taskToEdit = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  )

  const handleHideEditTaskModal = e => {
    if (e.currentTarget === e.target) navigate('/')
  }

  const handleEditTask = (title, duration) => {
    dispatch(
      tasksSliceActions.changeTask({ id: taskToEdit.id, title, duration })
    )

    navigate('/')
  }

  const modalInfo = {
    title: 'Редактирование задачи',
    onHide: handleHideEditTaskModal,
  }

  return (
    <ModalWindow modal={modalInfo}>
      <ModalForm task={taskToEdit} onEditTask={handleEditTask} />
    </ModalWindow>
  )
}

export default EditTaskModal
