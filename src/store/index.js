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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['timer'],
}

const timerTransform = createTransform(
  inboundState => ({
    ...inboundState,
    pomodorosFinishedToday: 0,
  }),
  null,
  { whitelist: ['statistics'] }
)

const timerPersistConfig = {
  key: 'timer',
  storage,
  blacklist: ['currentEvent'],
  transforms: [timerTransform],
}

const combinedReducer = combineReducers({
  timer: persistReducer(timerPersistConfig, timerSliceReducer),
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
