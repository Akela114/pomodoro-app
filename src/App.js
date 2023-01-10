import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/MainPage'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Fragment>
  )
}

export default App
