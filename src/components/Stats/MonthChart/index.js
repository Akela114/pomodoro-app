import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, getElementAtEvent } from 'react-chartjs-2'

import options from './MonthChart.options'
import { Wrapper, ChartContainer } from './MonthChart.styled'
import { formatSeconds, workWithDates } from '../../../helpers'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const MonthChart = props => {
  const selectedMonthStatistics = useSelector(
    store => store.statistics.data[props.date.year]?.[props.date.month] ?? {}
  )

  const chartRef = useRef(null)

  const labels = []

  const numOfDays = workWithDates.getDaysInMonth(
    props.date.month,
    props.date.year
  )

  for (let i = 0; i < numOfDays; i++) {
    labels.push(i + 1)
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Затраченное на работу время',
        data: labels.map(day => {
          const { hours, minutes } = formatSeconds.secondsToHM(
            selectedMonthStatistics[day]?.workingTime ?? 0
          )
          return Number.parseInt(hours) + Number.parseInt(minutes) / 60
        }),
        backgroundColor: labels.map(day =>
          day === props.date.day ? '#c84b4b77' : '#3271af77'
        ),
        borderColor: labels.map(day =>
          day === props.date.day ? '#aa2d2d' : '#0a4987'
        ),
        borderWidth: 1,
      },
    ],
  }

  const handleBarElementClick = event => {
    const newDayIndex = getElementAtEvent(chartRef.current, event)?.[0]?.index

    if (newDayIndex === undefined) return

    props.onSetDay(newDayIndex + 1)
  }

  return (
    <Wrapper>
      <ChartContainer>
        <Bar
          ref={chartRef}
          options={options}
          data={data}
          onClick={handleBarElementClick}
        />
      </ChartContainer>
    </Wrapper>
  )
}

export default MonthChart
