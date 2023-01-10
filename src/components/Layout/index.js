import React from 'react'

import logo from '../../assets/logo.png'
import { Wrapper, Header, Main } from './Layout.styled'

const Layout = props => {
  return (
    <Wrapper>
      <Header>
        <Header.Logo src={logo} alt="Application logotype"></Header.Logo>
      </Header>
      <Main>{props.children}</Main>
    </Wrapper>
  )
}

export default Layout
