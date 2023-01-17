import React from 'react'

import Layout from '../components/Layout'
import Timer from '../components/Timer'
import TasksInfo from '../components/TasksList'

const MainPage = () => {
  return (
    <Layout>
      <TasksInfo />
      <Timer />
    </Layout>
  )
}

export default MainPage
