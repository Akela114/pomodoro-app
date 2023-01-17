import styled, { css, keyframes } from 'styled-components'

import CardDefault from '../../UI/Card'
import ButtonWithText from '../../UI/Button/WithText'

export const Card = styled(CardDefault)`
  width: 100%;
  flex-shrink: 0;

  padding-left: 0;
  padding-right: 0;

  gap: 30px;

  box-shadow: none;
  border-radius: 0;

  @media (min-width: 1125px) {
    ${props =>
      props.state === 'entering'
        ? css`
            animation: ${slideInAnimation} ${props.timeout}ms ease-out forwards;
          `
        : ''}

    ${props =>
      props.state === 'exiting'
        ? css`
            animation: ${slideOutAnimation} ${props.timeout}ms ease-out forwards;
          `
        : ''}
  }

  @media (max-width: 1124px) {
    padding: 0;
    ${props =>
      props.state === 'entering'
        ? css`
            animation: ${slideInAnimationVertical} ${props.timeout}ms ease-out
              forwards;
          `
        : ''}

    ${props =>
      props.state === 'exiting'
        ? css`
            animation: ${slideOutAnimationVertical} ${props.timeout}ms ease-in
              forwards;
          `
        : ''}
  }
`

export const Header = styled.header`
  padding: 12px 29px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary.middle};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    display: none;
  }
`

Header.Title = styled.span`
  font-size: 17px;
  font-weight: 600;

  @media (max-width: 1399px) {
    font-size: 16px;
  }
`

Header.Button = styled.button`
  padding: 0 8px;

  width: 32px;
  height: 24px;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 26px 26px;`
      : ''};

  @media (max-width: 1399px) {
    ${props => (props.bgIcon ? 'background-size: 24px 24px;' : '')}
  }

  @media (max-width: 1124px) {
    padding: 0;
  }
`

export const Body = styled.div`
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
  display: flex;
  justify-content: space-between;
`

Actions.Notification = styled.div`
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

  ${props =>
    props.state === 'entering'
      ? css`
          animation: ${notificationSlideInAnimation} ${props.timeout}ms ease-out
            forwards;
        `
      : ''}

  ${props =>
    props.state === 'exiting'
      ? css`
          animation: ${notificationSlideOutAnimation} ${props.timeout}ms
            ease-out forwards;
        `
      : ''}

  align-self: flex-end;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 1124px) {
    display: none;
  }
`

Actions.Button = styled(ButtonWithText)`
  margin-top: 20px;

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

// Animations
const slideInAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }
`

const slideOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateX(-100%);
  }
  100% {
    opacity: 0;
    transform: translateX(0);
  }
`

const notificationSlideOutAnimation = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
    
  }
`

const notificationSlideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInAnimationVertical = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    max-height: 500px;
  }
`

const slideOutAnimationVertical = keyframes`
  0% {
    opacity: 1;
    max-height: 500px;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`
