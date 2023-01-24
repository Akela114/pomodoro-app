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
    removeTask(state, { payload: id }) {
      return state.filter(task => task.id !== id)
    },
    decrementFirstTaskRemainingTime(state) {
      state[0].remainingTime--
    },
    moveTask(state, { payload: { dragId, hoverId } }) {
      const dragIdx = state.findIndex(task => task.id === dragId)
      const hoverIdx = state.findIndex(task => task.id === hoverId)

      state.splice(hoverIdx, 0, state.splice(dragIdx, 1)[0])

      return state
    },
  },
})

export const tasksSliceReducer = tasksSlice.reducer
export const tasksSliceActions = tasksSlice.actions
