import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'

import { Main, TextStatsBlock } from './StatisticsPage.styled'
import Layout from '../components/Layout'
import DayStats from '../components/Stats/DayStats'
import MonthStats from '../components/Stats/MonthStats'
import MonthChart from '../components/Stats/MonthChart'
import { workWithDates } from '../helpers'

const dateReducer = (state, action) => {
  let { day, month, year } = state

  const {
    day: maxDay,
    month: maxMonth,
    year: maxYear,
  } = workWithDates.getCurrentDateAsObject()

  const { minYear, minMonth, minDay } = action.statisticsMeta

  switch (action.type) {
    case 'INCREMENT_DAY':
      if (!state.isIncrementDayEnabled) break
      if (day >= workWithDates.getDaysInMonth(month, year)) {
        if (month >= 11) {
          ++year
          month = 0
          day = 1
          break
        }
        ++month
        day = 1
        break
      }
      ++day
      break
    case 'DECREMENT_DAY':
      if (!state.isDecrementDayEnabled) break
      if (day > 1) {
        --day
        break
      }
      if (month > 0) {
        --month
        day = workWithDates.getDaysInMonth(month, year)
        break
      }
      --year
      month = 11
      day = 31
      break
    case 'SET_DAY':
      day = action.value
      break
    case 'INCREMENT_MONTH':
      if (!state.isIncrementMonthEnabled) break
      if (month >= 11) {
        ++year
        month = 0
        day = 1
        break
      }
      ++month
      day = 1
      break
    case 'DECREMENT_MONTH':
      if (!state.isDecrementMonthEnabled) break
      if (month > 0) {
        --month
        if (year <= minYear && month <= minMonth && minDay > day) day = minDay
        else day = 1
        break
      }
      --year
      month = 11
      if (year <= minYear && month <= minMonth && minDay > day) day = minDay
      else day = 1
      break
    case 'INCREMENT_YEAR':
      if (!state.isIncrementYearEnabled) break
      ++year
      if (year >= maxYear && maxMonth < month) month = maxMonth
      day = 1
      break
    case 'DECREMENT_YEAR':
      if (!state.isDecrementYearEnabled) break
      --year
      if (year <= minYear && minMonth > month) {
        month = minMonth
        day = minDay
        break
      }
      day = 1
      break
    default:
      throw Error('Get unknown action type')
  }

  const isIncrementYearEnabled = year < maxYear
  const isIncrementMonthEnabled =
    isIncrementYearEnabled || (year === maxYear && month < maxMonth)
  const isIncrementDayEnabled =
    isIncrementMonthEnabled || (month === maxMonth && day < maxDay)

  const isDecrementYearEnabled = minYear < year
  const isDecrementMonthEnabled =
    isDecrementYearEnabled || (minYear === year && minMonth < month)
  const isDecrementDayEnabled =
    isDecrementMonthEnabled || (minMonth === month && minDay < day)

  return {
    year,
    day,
    month,
    isIncrementDayEnabled,
    isIncrementMonthEnabled,
    isIncrementYearEnabled,
    isDecrementDayEnabled,
    isDecrementMonthEnabled,
    isDecrementYearEnabled,
  }
}

const StatisticsPage = () => {
  const statisticsMeta = useSelector(store => store.statistics.meta)

  const [selectedDate, dispatchSelectedDate] = useReducer(
    dateReducer,
    (() => {
      const { year, month, day } = workWithDates.getCurrentDateAsObject()

      const { minYear, minMonth, minDay } = statisticsMeta

      const isDecrementYearEnabled = minYear < year
      const isDecrementMonthEnabled =
        isDecrementYearEnabled || (minYear === year && minMonth < month)
      const isDecrementDayEnabled =
        isDecrementMonthEnabled || (minMonth === month && minDay < day)

      return {
        year,
        month,
        day,
        isIncrementDayEnabled: false,
        isIncrementMonthEnabled: false,
        isIncrementYearEnabled: false,
        isDecrementDayEnabled,
        isDecrementMonthEnabled,
        isDecrementYearEnabled,
      }
    })()
  )

  return (
    <Layout>
      <Main>
        <MonthChart
          date={selectedDate}
          onSetDay={value =>
            dispatchSelectedDate({
              type: 'SET_DAY',
              statisticsMeta: statisticsMeta,
              value,
            })
          }
        />
        <TextStatsBlock>
          <DayStats
            date={selectedDate}
            onIncrementDay={() =>
              dispatchSelectedDate({
                type: 'INCREMENT_DAY',
                statisticsMeta: statisticsMeta,
              })
            }
            onDecrementDay={() =>
              dispatchSelectedDate({
                type: 'DECREMENT_DAY',
                statisticsMeta: statisticsMeta,
              })
            }
          />
          <MonthStats
            date={selectedDate}
            onIncrementMonth={() =>
              dispatchSelectedDate({
                type: 'INCREMENT_MONTH',
                statisticsMeta: statisticsMeta,
              })
            }
            onDecrementMonth={() =>
              dispatchSelectedDate({
                type: 'DECREMENT_MONTH',
                statisticsMeta: statisticsMeta,
              })
            }
            onIncrementYear={() =>
              dispatchSelectedDate({
                type: 'INCREMENT_YEAR',
                statisticsMeta: statisticsMeta,
              })
            }
            onDecrementYear={() =>
              dispatchSelectedDate({
                type: 'DECREMENT_YEAR',
                statisticsMeta: statisticsMeta,
              })
            }
          />
        </TextStatsBlock>
      </Main>
    </Layout>
  )
}

export default StatisticsPage
