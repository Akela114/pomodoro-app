import { timerSliceActions } from './slices/timer'
import { tasksSliceActions } from './slices/tasks'

export const tickTimer = () => {
  return async (dispatch, getState) => {
    const { currentEvent, statistics } = getState().timer
    const [firstTask] = getState().tasks

    if (!currentEvent.isActive) return

    if (currentEvent.type === 'pomodoro' && firstTask) {
      if (firstTask?.remainingTime > 1) {
        dispatch(tasksSliceActions.decrementFirstTaskRemainingTime())
      } else {
        dispatch(tasksSliceActions.removeTask(firstTask.id))
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

    setTimeout(() => dispatch(tickTimer()), 1000)
  }
}
