import styled from 'styled-components'

import ButtonWithText from '../../../UI/Button/WithText'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Controls = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
`

Controls.WarningMessage = styled.div`
  padding: 0 0.75rem;

  font-size: 0.81rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary.dark};

  position: absolute;
  top: -1.37rem;
  left: 0.75rem;
  z-index: 1;

  @media (max-width: 530px) {
    font-size: 0.75rem;
  }

  @media (max-width: 410px) {
    display: none;
  }
`

Controls.TitleControl = styled.input`
  position: relative;
  z-index: 2;

  flex: 1;

  padding: 0.5rem 1.5rem;

  font-family: inherit;
  font-size: 0.87rem;
  font-weight: 400;
  color: ${props => props.theme.colors.primary.dark};

  background-color: ${props => props.theme.colors.white};

  border: 0;
  border-radius: 6.25rem;

  box-shadow: ${props => props.theme.shadows.small};

  &:focus {
    outline: 1px solid
      ${props =>
        props.warning
          ? props.theme.colors.secondary.light
          : props.theme.colors.tertiary.light};
  }

  &::placeholder {
    color: ${props => props.theme.colors.primary.middle};
  }

  @media (max-width: 530px) {
    font-size: 0.81rem;
  }
`

Controls.DurationControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.56rem;

  padding: 0.5rem 1.5rem;

  font-family: inherit;
  font-size: 0.87rem;
  font-weight: 400;

  background-color: ${props => props.theme.colors.white};

  border: 0;
  border-radius: 6.25rem;

  box-shadow: ${props => props.theme.shadows.small};

  &:focus-within {
    outline: 1px solid ${props => props.theme.colors.tertiary.light};
  }

  @media (max-width: 530px) {
    font-size: 0.81rem;
  }
`

export const InputBlock = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
`

InputBlock.Icon = styled.img`
  width: 1.12rem;
  height: 1.12rem;
`

InputBlock.Factor = styled.span`
  width: 2.25rem;

  text-align: center;
  color: ${props => props.theme.colors.primary.middle};
`

InputBlock.Input = styled.input`
  width: 1.61rem;

  font-family: inherit;
  font-size: inherit;

  text-align: center;

  border: 0;

  &:focus {
    outline: 0;
  }
`

InputBlock.Unit = styled.span`
  width: 2.25rem;

  text-align: center;
  color: ${props => props.theme.colors.primary.middle};
`

export const InputActions = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.43rem;

  overflow: hidden;
`

InputActions.Button = styled.button`
  width: 0.75rem;
  height: 0.56rem;

  border: 0;

  background-color: ${props => props.theme.colors.tertiary.middle};

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 0.75rem 0.75rem;`
      : ''};

  &:active {
    background-color: ${props => props.theme.colors.tertiary.dark};
  }
`

export const Action = styled(ButtonWithText)`
  background-color: ${props => props.theme.colors.tertiary.middle};

  font-family: inherit;
  font-size: 0.93rem;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  &:active {
    background-color: ${props => props.theme.colors.tertiary.dark};
  }

  @media (max-width: 530px) {
    font-size: 0.87rem;
  }
`
