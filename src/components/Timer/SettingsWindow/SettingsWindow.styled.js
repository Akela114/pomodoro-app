import styled, { css, keyframes } from 'styled-components'

import CardDefault from '../../UI/Card'

export const Card = styled(CardDefault)`
  width: 100%;
  flex-shrink: 0;

  padding-left: 0;
  padding-right: 0;

  gap: 30px;

  box-shadow: none;
  border-radius: 0;

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
`

export const Header = styled.header`
  padding: 12px 29px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary.middle};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

Header.Title = styled.span`
  font-size: 17px;
  font-weight: 600;
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
`

export const Body = styled.div`
  padding: 0 29px;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

export const SettingsGroup = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const SettingsBlock = styled(CardDefault)`
  padding: 0;
  overflow: hidden;

  border-radius: 20px;
`

SettingsBlock.Header = styled.header`
  font-size: 15px;
  font-weight: 500;

  padding: 12px 32px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary.middle};
`

SettingsBlock.Body = styled.div`
  padding: 30px 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;
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
