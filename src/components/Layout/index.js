import React, { Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { Wrapper, Header } from './Layout.styled'

const Layout = props => {
  const { pathname: currentPath } = useLocation()

  const mainPageClassName =
    currentPath === '/' ||
    currentPath === '/create-new-task' ||
    currentPath.startsWith('/edit-task/')
      ? 'active'
      : ''

  const statisticsPageClassName = currentPath === '/statistics' ? 'active' : ''

  return (
    <Wrapper>
      <Header>
        <Header.Logo src={logo} alt="Application logotype" />
        <Header.Nav>
          <Header.NavLink to="/" className={mainPageClassName}>
            Главная страница
          </Header.NavLink>
          <Header.NavLink to="/statistics" className={statisticsPageClassName}>
            Статистика
          </Header.NavLink>
        </Header.Nav>
      </Header>
      <Fragment>{props.children}</Fragment>
    </Wrapper>
  )
}

export default Layout
