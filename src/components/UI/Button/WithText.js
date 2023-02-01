import styled from 'styled-components'

const ButtonWithText = styled.button`
  padding: 0.5rem 1.25rem;

  border: 0;
  border-radius: 6.25rem;

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
  gap: 0.62rem;
`

ButtonWithText.Icon = styled.img`
  width: 1.37rem;
  height: 1.37rem;
`

ButtonWithText.Text = styled.span`
  font-family: inherit;
  font-size: 0.93rem;
  font-weight: 500;
  color: ${props => props.theme.colors.white};
`

export default ButtonWithText
