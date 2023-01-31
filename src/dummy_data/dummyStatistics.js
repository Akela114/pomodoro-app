import { workWithDates } from '../helpers'

const dummyStatistics = {}

dummyStatistics[2021] = {}
for (let i = 10; i < 12; i++) {
  dummyStatistics[2021][i] = {}
  for (let j = 1; j <= workWithDates.getDaysInMonth(i, 2021); j++) {
    let workingTime = Math.floor(Math.random() * 5)
    if (workingTime > 0) {
      workingTime = (workingTime * 60 + Math.floor(Math.random() * 61)) * 60
      dummyStatistics[2021][i][j] = {
        workingTime,
        tasksCompleted: Math.floor(Math.random() * 10) + 1,
      }
    }
  }
}

dummyStatistics[2022] = {}
for (let i = 0; i < 12; i++) {
  dummyStatistics[2022][i] = {}
  for (let j = 1; j <= workWithDates.getDaysInMonth(i, 2022); j++) {
    let workingTime = Math.floor(Math.random() * 5)
    if (workingTime > 0) {
      workingTime = (workingTime * 60 + Math.floor(Math.random() * 61)) * 60
      dummyStatistics[2022][i][j] = {
        workingTime,
        tasksCompleted: Math.floor(Math.random() * 10) + 1,
      }
    }
  }
}

dummyStatistics[2023] = {}
dummyStatistics[2023][0] = {}
for (let j = 1; j <= workWithDates.getDaysInMonth(0, 2023); j++) {
  let workingTime = Math.floor(Math.random() * 5)
  if (workingTime > 0) {
    workingTime = (workingTime * 60 + Math.floor(Math.random() * 61)) * 60
    dummyStatistics[2023][0][j] = {
      workingTime,
      tasksCompleted: Math.floor(Math.random() * 10) + 1,
    }
  }
}

dummyStatistics.meta = {
  minYear: 2021,
  minMonth: 10,
  minDay: Math.min(...Object.keys(dummyStatistics[2021][10])),
}

export default dummyStatistics
