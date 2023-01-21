import React from 'react'
import { Outlet } from 'react-router-dom'

import Layout from '../components/Layout'
import Timer from '../components/Timer'
import TasksInfo from '../components/TasksList'

const MainPage = () => {
  return (
    <Layout>
      <Outlet />
      <TasksInfo />
      <Timer />
    </Layout>
  )
}

export default MainPage
