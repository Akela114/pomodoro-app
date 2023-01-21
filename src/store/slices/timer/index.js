import { createSlice } from '@reduxjs/toolkit'

// Event types: pomodoro, shortBreak, longBreak

const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    settings: {
      timeSegmentsDuration: {
        pomodoro: 30,
        shortBreak: 5,
        longBreak: 15,
      },
      pomodorosBeforeLongBreak: 4,
    },
    currentEvent: {
      type: 'pomodoro',
      isActive: false,
      remainingTime: 1800,
      isTriggered: false,
    },
    statistics: {
      pomodorosFinishedToday: 0,
      pomodorosBeforeLongBreak: 4,
    },
  },
  reducers: {
    updateSetting(state, { payload }) {
      if (!state.currentEvent.isTriggered) {
        state.currentEvent.remainingTime =
          payload.timeSegmentsDuration.pomodoro * 60
      }

      if (
        state.statistics.pomodorosBeforeLongBreak >
        payload.pomodorosBeforeLongBreak
      ) {
        state.statistics.pomodorosBeforeLongBreak =
          payload.pomodorosBeforeLongBreak
      }

      state.settings.timeSegmentsDuration = {
        ...payload.timeSegmentsDuration,
      }
      state.settings.pomodorosBeforeLongBreak = payload.pomodorosBeforeLongBreak
    },
    startTimer(state) {
      state.currentEvent.isActive = true
      state.currentEvent.isTriggered = true
    },
    pauseTimer(state) {
      state.currentEvent.isActive = false
    },
    stopTimer(state) {
      state.currentEvent.isActive = false
      state.currentEvent.type = 'pomodoro'
      state.currentEvent.remainingTime =
        state.settings.timeSegmentsDuration.pomodoro * 60
      state.currentEvent.isTriggered = false
    },
    decrementRemainingTime(state) {
      state.currentEvent.remainingTime--
    },
    updateEvent(state, { payload }) {
      if (payload !== 'pomodoro') {
        state.statistics.pomodorosFinishedToday++
        state.statistics.pomodorosBeforeLongBreak =
          payload === 'longBreak'
            ? state.settings.pomodorosBeforeLongBreak
            : state.statistics.pomodorosBeforeLongBreak - 1
      }
      state.currentEvent.type = payload
      state.currentEvent.remainingTime =
        state.settings.timeSegmentsDuration[payload] * 60
    },
  },
})

export const timerSliceReducer = timerSlice.reducer
export const timerSliceActions = timerSlice.actions
