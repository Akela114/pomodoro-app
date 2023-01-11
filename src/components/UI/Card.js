import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 40px 29px;

  background-color: ${props => props.theme.colors.white};
  border-radius: 30px;

  box-shadow: ${props => props.theme.shadows.large};
`

export default Card
