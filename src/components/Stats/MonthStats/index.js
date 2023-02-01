import React from 'react'
import { useSelector } from 'react-redux'

import chevronLeftBlueIcon from '../../../assets/icons/chevron-left/chevron-left-blue.svg'
import chevronRightBlueIcon from '../../../assets/icons/chevron-right/chevron-right-blue.svg'
import chevronLeftWhiteIcon from '../../../assets/icons/chevron-left/chevron-left-white.svg'
import chevronRightWhiteIcon from '../../../assets/icons/chevron-right/chevron-right-white.svg'
import { Wrapper, Year, Month, StatsList, StatsItem } from './MonthStats.styled'
import { formatSeconds, workWithDates } from '../../../helpers'

const MonthStats = props => {
  const selectedMonthStatistics = useSelector(
    store => store.statistics.data[props.date.year]?.[props.date.month] ?? {}
  )

  const monthStringValue = workWithDates.monthNames[props.date.month]

  const { workingTime, tasksCompleted } = Object.values(
    selectedMonthStatistics
  ).reduce(
    (res, val) => ({
      workingTime: res.workingTime + val.workingTime,
      tasksCompleted: res.tasksCompleted + val.tasksCompleted,
    }),
    {
      workingTime: 0,
      tasksCompleted: 0,
    }
  )

  const workingTimeAverage = Math.floor(
    workingTime /
      workWithDates.getDaysInMonth(props.date.month, props.date.year)
  )

  const { hours: workingHours, minutes: workingMinutes } =
    formatSeconds.secondsToHM(workingTime)

  const { hours: workingHoursAverage, minutes: workingMinutesAverage } =
    formatSeconds.secondsToHM(workingTimeAverage)

  return (
    <Wrapper>
      <Year>
        <Year.Button
          onClick={props.onDecrementYear}
          disabled={!props.date.isDecrementYearEnabled}
        >
          <Year.ButtonImage src={chevronLeftBlueIcon} alt="Chevron Left Icon" />
        </Year.Button>
        <Year.Value>{props.date.year}</Year.Value>
        <Year.Button
          onClick={props.onIncrementYear}
          disabled={!props.date.isIncrementYearEnabled}
        >
          <Year.ButtonImage
            src={chevronRightBlueIcon}
            alt="Chevron Right Icon"
          />
        </Year.Button>
      </Year>
      <Month>
        <Month.Button
          onClick={props.onDecrementMonth}
          disabled={!props.date.isDecrementMonthEnabled}
        >
          <Month.ButtonImage
            src={chevronLeftWhiteIcon}
            alt="Chevron Left Icon"
          />
        </Month.Button>
        <Month.Value>{monthStringValue}</Month.Value>
        <Month.Button
          onClick={props.onIncrementMonth}
          disabled={!props.date.isIncrementMonthEnabled}
        >
          <Month.ButtonImage
            src={chevronRightWhiteIcon}
            alt="Chevron Right Icon"
          />
        </Month.Button>
      </Month>
      <StatsList>
        <StatsItem>
          <StatsItem.Info>
            <StatsItem.Name>Затрачено на работу</StatsItem.Name>
            <StatsItem.Description>всего</StatsItem.Description>
          </StatsItem.Info>
          <StatsItem.Value>
            {workingHours}:{workingMinutes}
          </StatsItem.Value>
        </StatsItem>
        <StatsItem>
          <StatsItem.Info>
            <StatsItem.Name>Затрачено на работу</StatsItem.Name>
            <StatsItem.Description>в среднем за день</StatsItem.Description>
          </StatsItem.Info>
          <StatsItem.Value>
            {workingHoursAverage}:{workingMinutesAverage}
          </StatsItem.Value>
        </StatsItem>
        <StatsItem>
          <StatsItem.Info>
            <StatsItem.Name>Задач выполнено</StatsItem.Name>
          </StatsItem.Info>
          <StatsItem.Value>{tasksCompleted}</StatsItem.Value>
        </StatsItem>
      </StatsList>
    </Wrapper>
  )
}

export default MonthStats
