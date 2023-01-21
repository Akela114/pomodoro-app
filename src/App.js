import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'
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
      </Routes>
    </Fragment>
  )
}

export default App
