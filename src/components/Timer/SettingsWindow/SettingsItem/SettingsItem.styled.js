import styled from 'styled-components'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Item.Name = styled.span`
  font-size: 14px;
  font-weight: 400;

  color: ${props => props.theme.colors.primary.dark};
`

export default Item
