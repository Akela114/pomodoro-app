import React from 'react'
import { useNavigate } from 'react-router-dom'

import Portal from '../../Portal'
import ModalForm from './ModalForm'
import { Wrapper, Modal } from './EditTaskModal.styled'

import exitIcon from '../../../assets/icons/exit/exit-white.svg'

const EditTaskModal = () => {
  const navigate = useNavigate()

  const handleHideEditTaskModal = () => {
    navigate('/')
  }

  return (
    <Portal>
      <Wrapper>
        <Modal>
          <Modal.Header>
            <Modal.Title>Редактирование задачи</Modal.Title>
            <Modal.ExitButton
              bgIcon={exitIcon}
              onClick={handleHideEditTaskModal}
            />
          </Modal.Header>
          <Modal.Body>
            <ModalForm />
          </Modal.Body>
        </Modal>
      </Wrapper>
    </Portal>
  )
}

export default EditTaskModal
