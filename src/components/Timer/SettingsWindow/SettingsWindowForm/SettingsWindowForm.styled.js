import styled, { keyframes, css } from 'styled-components'

import CardDefault from '../../../UI/Card'
import ButtonWithText from '../../../UI/Button/WithText'

export const Form = styled.form`
  position: relative;

  padding: 0 29px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1124px) {
    padding: 0;
    align-items: stretch;
  }
`

export const SettingsGroup = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1399px) {
    gap: 20px;
  }
`

export const SettingsBlock = styled(CardDefault)`
  padding: 0;
  overflow: hidden;

  border-radius: 20px;

  gap: 10px;

  @media (max-width: 1124px) {
    border-radius: 0;
  }
`

SettingsBlock.Header = styled.header`
  font-size: 15px;
  font-weight: 500;

  padding: 12px 32px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary.middle};

  @media (max-width: 1124px) {
    padding: 12px 20px;
  }
`

SettingsBlock.Body = styled.div`
  padding: 30px 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1399px) {
    padding: 20px 32px;
    gap: 12px;
  }
`

export const Actions = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1124px) {
    flex-direction: column;
  }
`

Actions.Notification = styled.div`
  position: absolute;

  font-size: 14px;
  font-weight: 400;

  flex: 1;

  padding: 8px 30px;

  color: ${props => props.theme.colors.primary.dark};

  border: 2px solid ${props => props.theme.colors.secondary.middle};
  border-radius: 100px;

  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  align-self: flex-end;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 1125px) {
    transform: translateX(-100%);

    ${props =>
      props.state === 'entering'
        ? css`
            animation: ${notificationSlideInAnimation} ${props.timeout}ms
              ease-out forwards;
          `
        : ''}

    ${props =>
      props.state === 'exiting'
        ? css`
            animation: ${notificationSlideOutAnimation} ${props.timeout}ms
              ease-out forwards;
          `
        : ''}
  }

  @media (max-width: 1124px) {
    width: 100%;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    text-align: center;
    transform: translateY(-100%);

    ${props =>
      props.state === 'entering'
        ? css`
            animation: ${notificationVerticalSlideInAnimation}
              ${props.timeout}ms ease-out forwards;
          `
        : ''}

    ${props =>
      props.state === 'exiting'
        ? css`
            animation: ${notificationVerticalSlideOutAnimation}
              ${props.timeout}ms ease-out forwards;
          `
        : ''}
  }
`

Actions.Button = styled(ButtonWithText)`
  @media (min-width: 580px) {
    ${props =>
      props.state === 'entering' || props.state === 'entered'
        ? `border-top-left-radius: 0;
      border-bottom-left-radius: 0;`
        : ''}

    transition: all ${props => props.timeout}ms ease-out;
  }

  @media (max-width: 1124px) {
    border-radius: 0;
    width: 100%;
    justify-content: center;
  }
`

const notificationSlideOutAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(0%);
  }
`

const notificationSlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }
`

const notificationVerticalSlideOutAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
`

const notificationVerticalSlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(-100%);
  }
`
