import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 2rem 1.87rem;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Message = styled.div`
  width: 50%;

  position: relative;
  top: -6.25rem;

  padding: 1.25rem 0.62rem;

  border-radius: 0.75rem;

  font-size: 3.11rem;
  font-weight: 600;
  text-align: center;

  color: ${props => props.theme.colors.tertiary.dark};
  background-color: ${props => props.theme.colors.white};

  box-shadow: ${props => props.theme.shadows.large};

  @media (max-width: 1599px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1249px) {
    font-size: 1.87rem;
  }

  @media (max-width: 1124px) {
    width: 100%;
  }

  @media (max-width: 519px) {
    font-size: 1.25rem;
    font-weight: 500;
  }
`
