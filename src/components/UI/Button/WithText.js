import styled from 'styled-components'

const ButtonWithText = styled.button`
  padding: 8px 20px;

  border: 0;
  border-radius: 100px;

  cursor: pointer;

  box-shadow: ${props => props.theme.shadows.small};

  background-color: ${props =>
    props.color === 'secondary'
      ? props.theme.colors.secondary.middle
      : props.color === 'tertiary'
      ? props.theme.colors.tertiary.middle
      : props.theme.colors.primary.middle};

  &:active {
    background-color: ${props =>
      props.color === 'secondary'
        ? props.theme.colors.secondary.dark
        : props.color === 'tertiary'
        ? props.theme.colors.tertiary.dark
        : props.theme.colors.primary.dark};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

ButtonWithText.Icon = styled.img`
  width: 22px;
  height: 22px;
`

ButtonWithText.Text = styled.span`
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export default ButtonWithText
