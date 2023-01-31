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
  padding: 20px 40px;
  padding-right: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 509px) {
    flex-direction: column;
  }

  @media (max-width: 399px) {
    padding: 10px 16px;
  }
`

Header.Logo = styled.img`
  height: 30px;
`

Header.Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 509px) {
    align-self: stretch;
  }

  @media (max-width: 434px) {
    flex-direction: column;
    align-items: stretch;
  }
`

Header.NavLink = styled(Link)`
  padding: 8px 20px;

  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.tertiary.dark};
  text-decoration: none;
  text-align: center;

  background-color: ${props => props.theme.colors.white};
  border-radius: 100px;

  box-shadow: ${props => props.theme.shadows.small};

  &.active {
    color: ${props => props.theme.colors.white};
    text-decoration: none;

    background-color: ${props => props.theme.colors.tertiary.middle};
  }

  @media (max-width: 1124px) {
    font-size: 14px;
  }

  @media (max-width: 509px) {
    flex: 1;
  }
`
