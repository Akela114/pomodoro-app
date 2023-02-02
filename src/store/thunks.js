import { timerSliceActions } from './slices/timer'
import { tasksSliceActions } from './slices/tasks'
import { statisticsSliceActions } from './slices/statistics'

export const tickTimer = (startTime, curInterval) => {
  return (dispatch, getState) => {
    const { currentEvent, statistics } = getState().timer
    const [firstTask] = getState().tasks

    if (!currentEvent.isActive) return

    if (currentEvent.type === 'pomodoro') {
      dispatch(statisticsSliceActions.addWorkingTime({ workingTimeToAdd: 1 }))
      if (firstTask) {
        if (firstTask?.remainingTime > 1) {
          dispatch(tasksSliceActions.decrementFirstTaskRemainingTime())
        } else {
          dispatch(
            statisticsSliceActions.addCompletedTasks({ tasksCompletedToAdd: 1 })
          )
          dispatch(tasksSliceActions.removeTask(firstTask.id))
        }
      }
    }

    if (currentEvent.remainingTime === 1) {
      const newEvent =
        currentEvent.type !== 'pomodoro'
          ? 'pomodoro'
          : statistics.pomodorosBeforeLongBreak === 1
          ? 'longBreak'
          : 'shortBreak'

      dispatch(timerSliceActions.updateEvent(newEvent))
    } else {
      dispatch(timerSliceActions.decrementRemainingTime())
    }

    const currentTime = new Date().getTime()
    const diff = currentTime - startTime - 1000
    const newInterval = curInterval - diff
    setTimeout(() => dispatch(tickTimer(currentTime, newInterval)), newInterval)
  }
}

export const completeTask = taskId => {
  return dispatch => {
    dispatch(tasksSliceActions.removeTask(taskId))
    dispatch(
      statisticsSliceActions.addCompletedTasks({ tasksCompletedToAdd: 1 })
    )
  }
}
