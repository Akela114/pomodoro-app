const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

const getCurrentDateAsObject = () => {
  const currentDate = new Date()
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  }
}

const getDateDiffInDays = (
  subtractedDateObj,
  reducedDateObj = getCurrentDateAsObject()
) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24

  const reducedDate = new Date(
    reducedDateObj.year,
    reducedDateObj.month,
    reducedDateObj.day
  )
  const subtractedDate = new Date(
    subtractedDateObj.year,
    subtractedDateObj.month,
    subtractedDateObj.day
  )

  return Math.floor((reducedDate - subtractedDate) / MS_PER_DAY)
}

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export default {
  getDaysInMonth,
  getCurrentDateAsObject,
  getDateDiffInDays,
  monthNames,
}
