import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: 349px) {
    flex-direction: column;
  }
`

Item.Name = styled.span`
  font-size: 14px;
  font-weight: 400;

  color: ${props => props.theme.colors.primary.dark};

  @media (max-width: 1399px) {
    font-size: 13px;
  }
`

export default Item
