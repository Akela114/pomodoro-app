import React from 'react'

import Portal from '../../Portal'
import { Wrapper, Modal } from './Modal.styled'

import exitIcon from '../../../assets/icons/exit/exit-white.svg'

const ModalWindow = props => {
  return (
    <Portal>
      <Wrapper onClick={props.modal.onHide}>
        <Modal>
          <Modal.Header>
            <Modal.Title>{props.modal.title}</Modal.Title>
            <Modal.ExitButton bgIcon={exitIcon} onClick={props.modal.onHide} />
          </Modal.Header>
          <Modal.Body>{props.children}</Modal.Body>
        </Modal>
      </Wrapper>
    </Portal>
  )
}

export default ModalWindow
