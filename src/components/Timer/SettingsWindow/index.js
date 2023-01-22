import React from 'react'
import Transition from 'react-transition-group/Transition'

import { Wrapper, Header } from './SettingsWindow.styled'
import SettingsWindowForm from './SettingsWindowForm'

import arrowLeftIcon from '../../../assets/icons/arrow-left.svg'

const SettingsWindow = props => {
  return (
    <Transition
      in={props.isShown}
      timeout={props.animationTime}
      mountOnEnter
      unmountOnExit
    >
      {state => (
        <Wrapper state={state} timeout={props.animationTime}>
          <Header>
            <Header.Title>Настройки таймера</Header.Title>
            <Header.Button
              bgIcon={arrowLeftIcon}
              onClick={props.onToggleDisplayedWindow}
            />
          </Header>
          <SettingsWindowForm />
        </Wrapper>
      )}
    </Transition>
  )
}

export default SettingsWindow
