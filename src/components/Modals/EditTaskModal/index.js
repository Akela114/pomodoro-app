import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Portal from '../../Portal'
import ModalForm from './ModalForm'
import { Wrapper, Modal } from './EditTaskModal.styled'

import { tasksSliceActions } from '../../../store/slices/tasks'

import exitIcon from '../../../assets/icons/exit/exit-white.svg'

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

  return (
    <Portal>
      <Wrapper onClick={handleHideEditTaskModal}>
        <Modal>
          <Modal.Header>
            <Modal.Title>Редактирование задачи</Modal.Title>
            <Modal.ExitButton
              bgIcon={exitIcon}
              onClick={handleHideEditTaskModal}
            />
          </Modal.Header>
          <Modal.Body>
            <ModalForm task={taskToEdit} onEditTask={handleEditTask} />
          </Modal.Body>
        </Modal>
      </Wrapper>
    </Portal>
  )
}

export default EditTaskModal
