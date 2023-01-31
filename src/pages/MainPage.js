import React from 'react'
import { Outlet } from 'react-router-dom'

import Layout from '../components/Layout'
import Timer from '../components/Timer'
import TasksInfo from '../components/TasksList'
import { Main } from './MainPage.styled'

const MainPage = () => {
  return (
    <Layout>
      <Main>
        <Outlet />
        <TasksInfo />
        <Timer />
      </Main>
    </Layout>
  )
}

export default MainPage
