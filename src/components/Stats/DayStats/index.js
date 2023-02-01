import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, Date, StatsList, StatsItem } from './DayStats.styled'
import chevronLeftIcon from '../../../assets/icons/chevron-left/chevron-left-white.svg'
import chevronRightIcon from '../../../assets/icons/chevron-right/chevron-right-white.svg'
import { formatSeconds, workWithDates } from '../../../helpers'

const DayStats = props => {
  const selectedDayStatistics = useSelector(
    store =>
      store.statistics.data[props.date.year]?.[props.date.month]?.[
        props.date.day
      ] ?? null
  )

  const dateDiff = workWithDates.getDateDiffInDays(props.date)

  const dateStringValue =
    dateDiff === 0
      ? 'Сегодня'
      : dateDiff === 1
      ? 'Вчера'
      : `${workWithDates.monthNames[props.date.month]}, ${props.date.day}`

  const { hours: workingHours, minutes: workingMinutes } =
    formatSeconds.secondsToHM(selectedDayStatistics?.workingTime ?? 0)
  const tasksCompleted = selectedDayStatistics?.tasksCompleted ?? 0

  return (
    <Wrapper>
      <Date>
        <Date.Button
          onClick={props.onDecrementDay}
          disabled={!props.date.isDecrementDayEnabled}
        >
          <Date.ButtonImage src={chevronLeftIcon} alt="Chevron Left Icon" />
        </Date.Button>
        <Date.Value>{dateStringValue}</Date.Value>
        <Date.Button
          onClick={props.onIncrementDay}
          disabled={!props.date.isIncrementDayEnabled}
        >
          <Date.ButtonImage src={chevronRightIcon} alt="Chevron Right Icon" />
        </Date.Button>
      </Date>
      <StatsList>
        <StatsItem>
          <StatsItem.Name>Затрачено на работу</StatsItem.Name>
          <StatsItem.Value>
            {workingHours}:{workingMinutes}
          </StatsItem.Value>
        </StatsItem>
        <StatsItem>
          <StatsItem.Name>Задач выполнено</StatsItem.Name>
          <StatsItem.Value>{tasksCompleted}</StatsItem.Value>
        </StatsItem>
      </StatsList>
    </Wrapper>
  )
}

export default DayStats
