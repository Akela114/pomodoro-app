import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
import StatisticsPage from './pages/StatisticsPage'
import NewTaskModal from './components/Modals/NewTaskModal'
import EditTaskModal from './components/Modals/EditTaskModal'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="create-new-task" element={<NewTaskModal />} />
          <Route path="edit-task/:taskId" element={<EditTaskModal />} />
        </Route>
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Fragment>
  )
}

export default App
