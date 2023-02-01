import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.5rem 1.81rem;

  background-color: ${props => props.theme.colors.white};
  border-radius: 1.87rem;

  box-shadow: ${props => props.theme.shadows.large};

  gap: 1.25rem;

  @media (max-width: 1124px) {
    border-radius: 0.75rem;
  }
`

export default Card
