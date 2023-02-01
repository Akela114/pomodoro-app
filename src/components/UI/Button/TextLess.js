import styled from 'styled-components'

const TextLessButton = styled.button`
  padding: 0.5rem;

  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 6.25rem;

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
      background-size: 1.25rem 1.25rem;`
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

export default TextLessButton
