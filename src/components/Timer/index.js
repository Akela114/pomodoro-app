import React, { useState } from 'react'

import Wrapper from './Timer.styled'
import TimerWindow from './TimerWindow'
import SettingsWindow from './SettingsWindow'

const Timer = () => {
  const [settingsWindowIsDisplayed, setSettingsWindowIsDisplayed] =
    useState(false)

  const handleToggleDisplayedWindow = () => {
    setSettingsWindowIsDisplayed(state => !state)
  }

  const animationTime = 500

  return (
    <Wrapper>
      <TimerWindow
        onToggleDisplayedWindow={handleToggleDisplayedWindow}
        isShown={!settingsWindowIsDisplayed}
        animationTime={animationTime}
      />
      <SettingsWindow
        onToggleDisplayedWindow={handleToggleDisplayedWindow}
        isShown={settingsWindowIsDisplayed}
        animationTime={animationTime}
      />
    </Wrapper>
  )
}

export default Timer
