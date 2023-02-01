import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background-color: #0003;
  backdrop-filter: blur(2px);
`

export const Modal = styled.div`
  width: 43.75rem;

  margin: 16.87rem auto;

  background-color: ${props => props.theme.colors.white};
  border-radius: 0.75rem;
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.large};

  @media (max-width: 43.75rem) {
    width: 100%;
    border-radius: 0;
  }
`

Modal.Header = styled.div`
  padding: 0.62rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.62rem;

  background: ${props => props.theme.colors.tertiary.gradient};
`

Modal.Title = styled.h2`
  font-size: 1.37rem;
  font-weight: 600;

  color: ${props => props.theme.colors.white};

  @media (max-width: 530px) {
    font-size: 1.25rem;
  }
`

Modal.ExitButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  border: 0;

  cursor: pointer;

  background-color: transparent;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.75rem 1.75rem;`
      : ''};

  @media (max-width: 1399px) {
    width: 1.68rem;
    height: 1.68rem;
    background-size: 1.68rem 1.68rem;
  }

  @media (max-width: 530px) {
    width: 1.56rem;
    height: 1.56rem;
    background-size: 1.56rem 1.56rem;
  }
`

Modal.Body = styled.div`
  padding: 2.5rem 2rem;

  @media (max-width: 410px) {
    padding: 2rem;
  }
`
