import styled from 'styled-components'

import ButtonWithText from '../../../UI/Button/WithText'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
`

Controls.TitleControl = styled.input`
  flex: 1;

  padding: 8px 24px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.primary.dark};

  background-color: ${props => props.theme.colors.white};

  border: 0;
  border-radius: 100px;

  box-shadow: ${props => props.theme.shadows.small};

  &:focus {
    outline: 1px solid ${props => props.theme.colors.secondary.light};
  }

  &::placeholder {
    color: ${props => props.theme.colors.primary.middle};
  }

  @media (max-width: 530px) {
    font-size: 13px;
  }
`

Controls.DurationControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 9px;

  padding: 8px 24px;

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;

  background-color: ${props => props.theme.colors.white};

  border: 0;
  border-radius: 100px;

  box-shadow: ${props => props.theme.shadows.small};

  &:focus-within {
    outline: 1px solid ${props => props.theme.colors.secondary.light};
  }

  @media (max-width: 530px) {
    font-size: 13px;
  }
`

export const InputBlock = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2px;
`

InputBlock.Icon = styled.img`
  width: 18px;
  height: 18px;
`

InputBlock.Factor = styled.span`
  width: 36px;

  text-align: center;
  color: ${props => props.theme.colors.primary.middle};
`

InputBlock.Input = styled.input`
  width: 26px;

  font-family: inherit;
  font-size: inherit;

  text-align: center;

  border: 0;

  &:focus {
    outline: 0;
  }
`

InputBlock.Unit = styled.span`
  width: 36px;

  text-align: center;
  color: ${props => props.theme.colors.primary.middle};
`

export const InputActions = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 7px;

  overflow: hidden;
`

InputActions.Button = styled.button`
  width: 12px;
  height: 9px;

  border: 0;

  background-color: ${props => props.theme.colors.secondary.middle};

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px 12px;`
      : ''};

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }
`

export const Action = styled(ButtonWithText)`
  background-color: ${props => props.theme.colors.secondary.middle};

  font-family: inherit;
  font-size: 15px;
  font-weight: 500;

  color: ${props => props.theme.colors.white};

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }

  @media (max-width: 530px) {
    font-size: 14px;
  }
`
