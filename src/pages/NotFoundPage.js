import React from 'react'

import Layout from '../components/Layout'
import { Main, Message } from './NotFoundPage.styled'

const MainPage = () => {
  return (
    <Layout>
      <Main>
        <Message>404: Страница не найдена</Message>
      </Main>
    </Layout>
  )
}

export default MainPage
