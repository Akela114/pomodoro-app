import styled from 'styled-components'

import CardDefault from '../UI/Card'

const Wrapper = styled(CardDefault)`
  padding: 0;
  flex-direction: row;

  overflow: hidden;

  @media (max-width: 1124px) {
    flex-direction: column;
  }
`

export default Wrapper
