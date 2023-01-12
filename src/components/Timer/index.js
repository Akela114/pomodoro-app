import React, { useState } from 'react'

import TimerWindow from './TimerWindow'
import SettingsWindow from './SettingsWindow'

const Timer = () => {
  const [settingsWindowIsDisplayed, setSettingsWindowIsDisplayed] =
    useState(false)

  const handleToggleDisplayedWindow = () => {
    setSettingsWindowIsDisplayed(state => !state)
  }

  if (settingsWindowIsDisplayed)
    return (
      <SettingsWindow onToggleDisplayedWindow={handleToggleDisplayedWindow} />
    )

  return <TimerWindow onToggleDisplayedWindow={handleToggleDisplayedWindow} />
}

export default Timer
