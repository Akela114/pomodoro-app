import styled from 'styled-components'
import backgroundFigure from '../../assets/figures/background-figure.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: ${props => props.theme.colors.primary.light};
  background-image: url(${backgroundFigure});
  background-repeat: no-repeat;
  background-position-x: center;
`

export const Header = styled.header`
  padding: 20px 40px;
`

Header.Logo = styled.img`
  height: 30px;
`

export const Main = styled.main`
  padding: 0 32px 30px;

  flex: 1;

  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 20px;
`
