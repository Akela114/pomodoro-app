import { createSlice } from '@reduxjs/toolkit'

import { workWithDates } from '../../../helpers'

const {
  year: initialMinYear,
  month: initialMinMonth,
  day: initialMinDay,
} = workWithDates.getCurrentDateAsObject()

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    meta: {
      minYear: initialMinYear,
      minMonth: initialMinMonth,
      minDay: initialMinDay,
    },
    data: {},
  },
  reducers: {
    addWorkingTime(
      state,
      {
        payload: {
          workingTimeToAdd,
          date: { year, month, day } = workWithDates.getCurrentDateAsObject(),
        },
      }
    ) {
      if (!state.data[year]) state.data[year] = {}
      if (!state.data[year][month]) state.data[year][month] = {}
      if (!state.data[year][month][day]) {
        state.data[year][month][day] = {
          workingTime: 0,
          tasksCompleted: 0,
        }

        if (year < state.meta.minYear) {
          state.meta.minYear = year
          state.meta.minMonth = month
          state.meta.minDay = day
        } else if (year === state.meta.minYear) {
          if (month < state.meta.minMonth) {
            state.meta.minMonth = month
            state.meta.minDay = day
          } else if (month === state.meta.minMonth && day < state.meta.minDay) {
            state.meta.minDay = day
          }
        }
      }

      state.data[year][month][day].workingTime += workingTimeToAdd
    },
    addCompletedTasks(
      state,
      {
        payload: {
          tasksCompletedToAdd,
          date: { year, month, day } = workWithDates.getCurrentDateAsObject(),
        },
      }
    ) {
      if (!state.data[year]) state.data[year] = {}
      if (!state.data[year][month]) state.data[year][month] = {}
      if (!state.data[year][month][day]) {
        state.data[year][month][day] = {
          workingTime: 0,
          tasksCompleted: 0,
        }

        if (year < state.meta.minYear) {
          state.meta.minYear = year
          state.meta.minMonth = month
          state.meta.minDay = day
        } else if (year === state.meta.minYear) {
          if (month < state.meta.minMonth) {
            state.meta.minMonth = month
            state.meta.minDay = day
          } else if (month === state.meta.minMonth && day < state.meta.minDay) {
            state.meta.minDay = day
          }
        }
      }

      state.data[year][month][day].tasksCompleted += tasksCompletedToAdd
    },
  },
})

export const statisticsSliceReducer = statisticsSlice.reducer
export const statisticsSliceActions = statisticsSlice.actions
