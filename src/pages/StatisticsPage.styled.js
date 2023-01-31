import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 32px 30px;

  flex: 1;

  display: flex;
  gap: 20px;

  @media (max-width: 799px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    justify-content: start;
  }

  @media (max-width: 399px) {
    padding: 0 12px 10px;
  }
`

export const TextStatsBlock = styled.div`
  width: 310px;
  display: grid;
  grid-template-rows: 2fr 3fr;
  gap: 20px;

  @media (max-width: 799px) {
    width: auto;
  }
`
