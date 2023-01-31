const options = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  layout: {
    padding: {
      top: 40,
      bottom: 40,
      left: 20,
      right: 20,
    },
  },
  scales: {
    x: {
      grid: {
        color: '#0a498720',
      },
      title: {
        display: true,
        text: 'Затраченное время, ч',
        color: '#0a4987',
        font: {
          family: '"Montserrat", sans-serif',
          size: 12,
          lineHeight: 1.3,
          weight: 500,
        },
      },
      ticks: {
        color: '#0a4987',
        font: {
          family: '"Montserrat", sans-serif',
          size: 12,
          lineHeight: 1.3,
        },
      },
    },
    y: {
      grid: {
        color: '#0a498720',
      },
      ticks: {
        color: '#0a4987',
        font: {
          family: '"Montserrat", sans-serif',
          size: 12,
          lineHeight: 1.3,
        },
      },
    },
  },
}

export default options
