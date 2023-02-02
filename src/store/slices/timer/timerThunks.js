import { timerSliceActions } from '.'

import { tickTimer } from '../../thunks'

export const startTimer = () => {
  return async dispatch => {
    dispatch(timerSliceActions.startTimer())

    const startTime = new Date().getTime()
    setTimeout(() => dispatch(tickTimer(startTime, 1000)), 1000)
  }
}
