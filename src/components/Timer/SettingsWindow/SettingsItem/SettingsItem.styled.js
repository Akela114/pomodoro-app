import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 349px) {
    flex-direction: column;
  }
`

Item.Name = styled.span`
  font-size: 0.87rem;
  font-weight: 400;

  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 0.81rem;
  }
`

export const ItemControl = styled.div`
  padding: 0.5rem 1.25rem;

  min-width: 8.12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.62rem;

  border-radius: 6.25rem;
  box-shadow: ${props => props.theme.shadows.small};

  &:has(input:focus) {
    outline: 1px solid ${props => props.theme.colors.secondary.light};
  }
`

ItemControl.Label = styled.label`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.87rem;
  font-weight: 400;

  color: ${props => props.theme.colors.primary.middle};

  @media (max-width: 1399px) {
    font-size: 0.81rem;
  }
`

ItemControl.Input = styled.input`
  font-family: inherit;
  font-size: 0.87rem;
  font-weight: 400;

  width: 1.61rem;

  border: 0;
  outline: 0;

  text-align: center;

  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 0.81rem;
  }
`

ItemControl.LabelIcon = styled.img`
  width: 1.12rem;
  height: 1.12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1399px) {
    width: 1.06rem;
    height: 1.06rem;
  }
`

ItemControl.Actions = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 0.43rem;

  overflow: hidden;
`

ItemControl.Action = styled.button`
  width: 0.87rem;
  height: 0.68rem;

  border: 0;

  background-color: ${props => props.theme.colors.secondary.middle};

  ${props =>
    props.bgIcon
      ? `background-image: url(${props.bgIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: 0.75rem 0.75rem;`
      : ''};

  &:active {
    background-color: ${props => props.theme.colors.secondary.dark};
  }
`
