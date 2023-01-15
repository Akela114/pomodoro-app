import { configureStore } from '@reduxjs/toolkit'

import { timerSliceReducer } from './slices/timerSlice'

const store = configureStore({
  reducer: {
    timer: timerSliceReducer,
  },
})

export default store
