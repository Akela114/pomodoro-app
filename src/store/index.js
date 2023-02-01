import { configureStore } from '@reduxjs/toolkit'

import { timerSliceReducer } from './slices/timer'
import { tasksSliceReducer } from './slices/tasks'
import { statisticsSliceReducer } from './slices/statistics'

const store = configureStore({
  reducer: {
    timer: timerSliceReducer,
    tasks: tasksSliceReducer,
    statistics: statisticsSliceReducer,
  },
})

export default store
