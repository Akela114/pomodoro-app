import React from 'react'

import { secondsToHM } from '../../../helpers/formatSeconds'

import { Wrapper, Header, Body } from './FirstTask.styled'
import editIcon from '../../../assets/icons/edit/edit-white.svg'
import exitIcon from '../../../assets/icons/exit/exit-white.svg'
import clockIcon from '../../../assets/icons/clock.svg'
import checkIcon from '../../../assets/icons/check.svg'
import tomatoFullIcon from '../../../assets/icons/tomato/tomato-full.svg'
import tomatoFullBWIcon from '../../../assets/icons/tomato/tomato-full-bw.svg'
import tomatoHalfIcon from '../../../assets/icons/tomato/tomato-half.svg'

const pomodoroDuration = 1800

const FirstTask = props => {
  const { hours, minutes } = secondsToHM(props.task.remainingTime)

  const remainingPomodorosArray = [
    Math.trunc(
      (props.task.totalTime - props.task.remainingTime) / pomodoroDuration
    ),
    Math.trunc(props.task.remainingTime / pomodoroDuration),
    props.task.remainingTime % pomodoroDuration !== 0 ? 1 : 0,
  ].reduce(
    (resArr, counter, idx) => [
      ...resArr,
      ...Array(counter)
        .fill(undefined)
        .map((_, i) =>
          idx === 0 ? (
            <Body.PomodorosRemainingItem
              key={`passed-${i}`}
              src={tomatoFullBWIcon}
              alt="Tomato Full Black & White Icon"
            />
          ) : idx === 1 ? (
            <Body.PomodorosRemainingItem
              key={`left-full-${i}`}
              src={tomatoFullIcon}
              alt="Tomato Full Icon"
            />
          ) : (
            <Body.PomodorosRemainingItem
              key={`left-half`}
              src={tomatoHalfIcon}
              alt="Tomato Half Icon"
            />
          )
        ),
    ],
    []
  )

  return (
    <Wrapper>
      <Header>
        <Header.Title>{props.task.title}</Header.Title>
        <Header.ActionsGroup>
          <Header.Action bgIcon={editIcon}></Header.Action>
          <Header.Action bgIcon={exitIcon}></Header.Action>
        </Header.ActionsGroup>
      </Header>
      <Body>
        <Body.RemainingTime>
          <Body.TimeImage src={clockIcon} alt="Clock Icon" />
          <Body.TimeValue>
            осталось {hours}:{minutes}
          </Body.TimeValue>
        </Body.RemainingTime>
        <Body.ElementsGroup>
          <Body.PomodorosRemaining>
            {remainingPomodorosArray}
          </Body.PomodorosRemaining>
          <Body.Button bgIcon={checkIcon}></Body.Button>
        </Body.ElementsGroup>
      </Body>
    </Wrapper>
  )
}

export default FirstTask
