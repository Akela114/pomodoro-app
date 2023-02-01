import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
    user-select: none
  }

  html {
    font-size: 16px;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    font-family: inherit;
  }
`

export default GlobalStyle
