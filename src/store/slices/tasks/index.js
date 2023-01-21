import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask(state, { payload: { title, duration } }) {
      state.push({
        id: uuid(),
        title,
        totalTime: duration * 60,
        remainingTime: duration * 60,
      })
    },
    changeTask(state, { payload: { id, title, duration } }) {
      const taskToChange = state.find(task => task.id === id)

      if (title) taskToChange.title = title
      if (duration) {
        taskToChange.totalTime -= taskToChange.remainingTime - duration * 60
        taskToChange.remainingTime = duration * 60
      }
    },
  },
})

export const tasksSliceReducer = tasksSlice.reducer
export const tasksSliceActions = tasksSlice.actions
