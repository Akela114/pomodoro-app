import React from 'react'
import { useNavigate } from 'react-router-dom'

import Portal from '../../Portal'
import ModalForm from './ModalForm'
import { Wrapper, Modal } from './NewTaskModal.styled'

import exitIcon from '../../../assets/icons/exit/exit-white.svg'

const NewTaskModal = () => {
  const navigate = useNavigate()

  const handleHideEditTaskModal = () => {
    navigate('/')
  }

  return (
    <Portal>
      <Wrapper>
        <Modal>
          <Modal.Header>
            <Modal.Title>Новая задача</Modal.Title>
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

export default NewTaskModal
