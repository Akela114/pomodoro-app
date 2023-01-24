import React, { useState } from 'react'

import useWindowSize from '../../hooks/useWindowSize'
import Wrapper from './Timer.styled'
import TimerWindow from './TimerWindow'
import SettingsWindow from './SettingsWindow'

const animationTime = 500

const Timer = () => {
  const windowSize = useWindowSize()

  const [settingsWindowIsDisplayed, setSettingsWindowIsDisplayed] =
    useState(false)

  const handleToggleDisplayedWindow = () => {
    setSettingsWindowIsDisplayed(state => !state)
  }

  return (
    <Wrapper>
      <TimerWindow
        onToggleDisplayedWindow={handleToggleDisplayedWindow}
        isShown={windowSize.innerWidth < 1125 || !settingsWindowIsDisplayed}
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
