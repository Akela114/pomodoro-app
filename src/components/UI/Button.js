import styled from 'styled-components'

const Button = styled.button`
  padding: 8px;

  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 100px;

  cursor: pointer;

  background-color: ${props =>
    props.color === 'secondary'
      ? props.theme.colors.secondary.middle
      : props.color === 'tertiary'
      ? props.theme.colors.tertiary.middle
      : props.theme.colors.primary.middle};

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px 20px;`
      : ''};

  &:active {
    background-color: ${props =>
      props.color === 'secondary'
        ? props.theme.colors.secondary.dark
        : props.color === 'tertiary'
        ? props.theme.colors.tertiary.dark
        : props.theme.colors.primary.dark};
  }
`

export default Button
