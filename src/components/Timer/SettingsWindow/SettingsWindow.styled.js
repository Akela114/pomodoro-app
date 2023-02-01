import styled, { css, keyframes } from 'styled-components'

import CardDefault from '../../UI/Card'

export const Wrapper = styled(CardDefault)`
  width: 100%;
  flex-shrink: 0;

  padding-left: 0;
  padding-right: 0;

  gap: 1.87rem;

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
  padding: 0.75rem 1.81rem;

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
  font-size: 1.06rem;
  font-weight: 600;

  @media (max-width: 1399px) {
    font-size: 1rem;
  }
`

Header.Button = styled.button`
  padding: 0 0.5rem;

  width: 2rem;
  height: 1.5rem;

  background-color: transparent;
  border: 0;

  cursor: pointer;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.61rem 1.61rem;`
      : ''};

  @media (max-width: 1399px) {
    ${props => (props.bgIcon ? 'background-size: 1.5rem 1.5rem;' : '')}
  }

  @media (max-width: 1124px) {
    padding: 0;
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
    max-height: 31.25rem;
  }
`

const slideOutAnimationVertical = keyframes`
  0% {
    opacity: 1;
    max-height: 31.25rem;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    max-height: 0;
  }
`
