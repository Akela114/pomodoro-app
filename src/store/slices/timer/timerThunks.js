import { timerSliceActions } from '.'

const tickTimer = () => {
  return async (dispatch, getState) => {
    const { currentEvent, statistics } = getState().timer

    if (!currentEvent.isActive) return

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

export const startTimer = () => {
  return async dispatch => {
    dispatch(timerSliceActions.startTimer())
    setTimeout(() => dispatch(tickTimer()), 1000)
  }
}
