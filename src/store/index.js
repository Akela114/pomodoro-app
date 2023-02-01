import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createTransform,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { timerSliceReducer } from './slices/timer'
import { tasksSliceReducer } from './slices/tasks'
import { statisticsSliceReducer } from './slices/statistics'

const timerTransform = createTransform(
  inboundState => ({
    settings: {
      ...inboundState.settings,
      timeSegmentsDuration: {
        ...inboundState.settings.timeSegmentsDuration,
      },
    },
    currentEvent: {
      type: 'pomodoro',
      isActive: false,
      remainingTime: inboundState.settings.timeSegmentsDuration.pomodoro * 60,
      isTriggered: false,
    },
    statistics: {
      ...inboundState.statistics,
      pomodorosFinishedToday: 0,
    },
  }),
  null,
  { whitelist: ['timer'] }
)

const persistConfig = {
  key: 'root',
  storage,
  transforms: [timerTransform],
}

const combinedReducer = combineReducers({
  timer: timerSliceReducer,
  tasks: tasksSliceReducer,
  statistics: statisticsSliceReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
