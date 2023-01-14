import React from 'react'
import Transition from 'react-transition-group/Transition'

import SettingsItem from './SettingsItem'
import ButtonWithText from '../../UI/Button/WithText'
import {
  Card,
  Header,
  Body,
  SettingsGroup,
  SettingsBlock,
} from './SettingsWindow.styled'

import saveIcon from '../../../assets/icons/save.svg'
import tomatoFullIcon from '../../../assets/icons/tomato/tomato-full.svg'
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
        <Card state={state} timeout={props.animationTime}>
          <Header>
            <Header.Title>Настройки таймера</Header.Title>
            <Header.Button
              bgIcon={arrowLeftIcon}
              onClick={props.onToggleDisplayedWindow}
            />
          </Header>
          <Body>
            <SettingsGroup>
              <SettingsBlock>
                <SettingsBlock.Header>
                  Продолжительность временных отрезков
                </SettingsBlock.Header>
                <SettingsBlock.Body>
                  <SettingsItem
                    name="Pomodoro"
                    labelText="мин"
                    inputId="settings-input-1"
                  />
                  <SettingsItem
                    name="Короткий перерыв"
                    labelText="мин"
                    inputId="settings-input-2"
                  />
                  <SettingsItem
                    name="Длинный перерыв"
                    labelText="мин"
                    inputId="settings-input-3"
                  />
                </SettingsBlock.Body>
              </SettingsBlock>
              <SettingsBlock>
                <SettingsBlock.Header>Другое</SettingsBlock.Header>
                <SettingsBlock.Body>
                  <SettingsItem
                    name="Pomodoro-в до длинного перерыва"
                    labelIcon={tomatoFullIcon}
                    inputId="settings-input-4"
                  />
                </SettingsBlock.Body>
              </SettingsBlock>
            </SettingsGroup>
            <ButtonWithText color="secondary">
              <ButtonWithText.Icon src={saveIcon} alt="Save Icon" />
              <ButtonWithText.Text>Сохранить</ButtonWithText.Text>
            </ButtonWithText>
          </Body>
        </Card>
      )}
    </Transition>
  )
}

export default SettingsWindow
