import styled, { keyframes, css } from 'styled-components'

import CardDefault from '../../../UI/Card'
import ButtonWithText from '../../../UI/Button/WithText'

export const Form = styled.form`
  position: relative;

  padding: 0 1.81rem;

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
  gap: 1.87rem;

  @media (max-width: 1399px) {
    gap: 1.25rem;
  }
`

export const SettingsBlock = styled(CardDefault)`
  padding: 0;
  overflow: hidden;

  border-radius: 1.25rem;

  gap: 0.62rem;

  @media (max-width: 1124px) {
    border-radius: 0;
  }
`

SettingsBlock.Header = styled.header`
  font-size: 0.93rem;
  font-weight: 500;

  padding: 0.75rem 2rem;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary.middle};

  @media (max-width: 1124px) {
    padding: 0.75rem 1.25rem;
  }
`

SettingsBlock.Body = styled.div`
  padding: 1.87rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 1399px) {
    padding: 1.25rem 2rem;
    gap: 0.75rem;
  }
`

export const Actions = styled.div`
  margin-top: 3.11rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1124px) {
    flex-direction: column;
  }
`

Actions.Notification = styled.div`
  position: absolute;

  font-size: 0.87rem;
  font-weight: 400;

  flex: 1;

  padding: 0.5rem 1.87rem;

  color: ${props => props.theme.colors.primary.dark};

  border: 2px solid ${props => props.theme.colors.secondary.middle};
  border-radius: 6.25rem;

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
