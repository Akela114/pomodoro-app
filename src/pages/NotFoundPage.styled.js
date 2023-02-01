import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 32px 30px;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Message = styled.div`
  width: 50%;

  position: relative;
  top: -100px;

  padding: 20px 10px;

  border-radius: 12px;

  font-size: 50px;
  font-weight: 600;
  text-align: center;

  color: ${props => props.theme.colors.tertiary.dark};
  background-color: ${props => props.theme.colors.white};

  box-shadow: ${props => props.theme.shadows.large};

  @media (max-width: 1599px) {
    font-size: 40px;
  }

  @media (max-width: 1249px) {
    font-size: 30px;
  }

  @media (max-width: 1124px) {
    width: 100%;
  }

  @media (max-width: 519px) {
    font-size: 20px;
    font-weight: 500;
  }
`
