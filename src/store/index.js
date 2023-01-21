import { configureStore } from '@reduxjs/toolkit'

import { timerSliceReducer } from './slices/timer'
import { tasksSliceReducer } from './slices/tasks'

const store = configureStore({
  reducer: {
    timer: timerSliceReducer,
    tasks: tasksSliceReducer,
  },
})

export default store
