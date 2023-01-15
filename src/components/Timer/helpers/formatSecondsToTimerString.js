const formatSecondsToTimerString = seconds => {
  const min = Math.trunc(seconds / 60)
  const sec = seconds % 60

  return {
    minutes: String(min).padStart(2, '0'),
    seconds: String(sec).padStart(2, '0'),
  }
}

export default formatSecondsToTimerString
