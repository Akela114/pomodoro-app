import { timerSliceActions } from '.'

import { tickTimer } from '../../thunks'

export const startTimer = () => {
  return async dispatch => {
    dispatch(timerSliceActions.startTimer())
    setTimeout(() => dispatch(tickTimer()), 1000)
  }
}
