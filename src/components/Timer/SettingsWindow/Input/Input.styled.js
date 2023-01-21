import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 8px 20px;

  min-width: 130px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  box-shadow: ${props => props.theme.shadows.small};

  &:has(input:focus) {
    outline: 1px solid ${props => props.theme.colors.secondary.light};
  }
`

export const Control = styled.div`
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`

Control.Input = styled.input`
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;

  width: 26px;

  border: 0;
  outline: 0;

  text-align: center;

  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 13px;
  }
`

Control.Label = styled.label`
  flex: 1;

  font-size: 14px;
  font-weight: 400;

  color: ${props => props.theme.colors.primary.middle};

  @media (max-width: 1399px) {
    font-size: 13px;
  }
`

Control.LabelIcon = styled.img`
  width: 18px;
  height: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1399px) {
    width: 17px;
    height: 17px;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 7px;

  overflow: hidden;
`

Actions.Button = styled.button`
  width: 14px;
  height: 11px;

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
