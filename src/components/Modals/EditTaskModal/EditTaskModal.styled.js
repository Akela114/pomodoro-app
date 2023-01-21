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
  width: 700px;

  margin: 270px auto;

  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  overflow: hidden;

  box-shadow: ${props => props.theme.shadows.large};

  @media (max-width: 700px) {
    width: 100%;
    border-radius: 0;
  }
`

Modal.Header = styled.div`
  padding: 10px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  background: ${props => props.theme.colors.tertiary.gradient};
`

Modal.Title = styled.h2`
  font-size: 22px;
  font-weight: 600;

  color: ${props => props.theme.colors.white};

  @media (max-width: 530px) {
    font-size: 20px;
  }
`

Modal.ExitButton = styled.button`
  width: 28px;
  height: 28px;
  border: 0;

  cursor: pointer;

  background-color: transparent;

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px 28px;`
      : ''};

  @media (max-width: 1399px) {
    width: 27px;
    height: 27px;
    background-size: 27px 27px;
  }

  @media (max-width: 530px) {
    width: 25px;
    height: 25px;
    background-size: 25px 25px;
  }
`

Modal.Body = styled.div`
  padding: 40px 32px;

  @media (max-width: 410px) {
    padding: 32px;
  }
`
