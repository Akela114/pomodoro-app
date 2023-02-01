import React, { useEffect } from 'react'
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

  useEffect(() => {
    if (!taskToEdit) navigate('/page-not-found')
  }, [taskToEdit])

  if (!taskToEdit) return

  const handleHideEditTaskModal = (e = null) => {
    if (!e || e.currentTarget === e.target) navigate('/')
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
      <ModalForm
        task={taskToEdit}
        onEditTask={handleEditTask}
        onHideModal={handleHideEditTaskModal}
      />
    </ModalWindow>
  )
}

export default EditTaskModal
