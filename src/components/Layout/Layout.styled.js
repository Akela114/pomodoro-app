import styled from 'styled-components'
import { Link } from 'react-router-dom'

import backgroundFigure from '../../assets/figures/background-figure.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: ${props => props.theme.colors.primary.light};

  @media (min-width: 1125px) {
    background-image: url(${backgroundFigure});
    background-repeat: no-repeat;
    background-position-x: center;
  }
`

export const Header = styled.header`
  padding: 1.25rem 2.5rem;
  padding-right: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 509px) {
    flex-direction: column;
  }

  @media (max-width: 399px) {
    padding: 0.62rem 1rem;
  }
`

Header.Logo = styled.img`
  height: 1.87rem;
`

Header.Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 509px) {
    align-self: stretch;
  }

  @media (max-width: 434px) {
    flex-direction: column;
    align-items: stretch;
  }
`

Header.NavLink = styled(Link)`
  padding: 0.5rem 1.25rem;

  font-size: 0.93rem;
  font-weight: 500;
  color: ${props => props.theme.colors.tertiary.dark};
  text-decoration: none;
  text-align: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 6.25rem;

  box-shadow: ${props => props.theme.shadows.small};

  &.active {
    color: ${props => props.theme.colors.white};
    text-decoration: none;

    background-color: ${props => props.theme.colors.tertiary.middle};
  }

  @media (max-width: 1124px) {
    font-size: 0.87rem;
  }

  @media (max-width: 509px) {
    flex: 1;
  }
`
