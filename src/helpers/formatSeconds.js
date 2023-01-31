const secondsToMS = seconds => {
  const min = Math.trunc(seconds / 60)
  const sec = seconds % 60

  return {
    minutes: String(min).padStart(2, '0'),
    seconds: String(sec).padStart(2, '0'),
  }
}

const secondsToHM = seconds => {
  const hours = Math.trunc(seconds / 3600)
  const min = Math.ceil((seconds % 3600) / 60)

  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(min).padStart(2, '0'),
  }
}

const secondsToHMS = seconds => {
  const hours = Math.trunc(seconds / 3600)
  const min = Math.floor((seconds % 3600) / 60)
  const sec = seconds % 60

  return {
    hours: String(hours).padStart(2, '0'),
    minutes: String(min).padStart(2, '0'),
    seconds: String(sec).padStart(2, '0'),
  }
}

export default { secondsToHMS, secondsToHM, secondsToMS }
