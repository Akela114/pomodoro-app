import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 32px 30px;

  flex: 1;

  display: flex;
  gap: 20px;

  @media (max-width: 1124px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    justify-content: start;
  }

  @media (max-width: 399px) {
    padding: 0 12px 10px;
  }
`
