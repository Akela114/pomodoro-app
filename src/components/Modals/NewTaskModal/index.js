import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Modal from '../../UI/Modal'
import ModalForm from './ModalForm'

import { tasksSliceActions } from '../../../store/slices/tasks'

const NewTaskModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleHideEditTaskModal = e => {
    if (e.currentTarget === e.target) navigate('/')
  }

  const handleAddNewTask = (title, duration) => {
    dispatch(tasksSliceActions.addTask({ title, duration }))
  }

  const modalInfo = {
    title: 'Новая задача',
    onHide: handleHideEditTaskModal,
  }

  return (
    <Modal modal={modalInfo}>
      <ModalForm onAddNewTask={handleAddNewTask} />
    </Modal>
  )
}

export default NewTaskModal
