function calculateDaysBetweenDates(begin, end) {
  if (begin.getTime() > end.getTime()) {
    return 0
  }
  const oneDay = 24 * 60 * 60 * 1000
  const diffDays = Math.round(
    Math.abs((begin.getTime() - end.getTime()) / oneDay),
  )
  return diffDays
}

calculateDaysBetweenDates(new Date(2020, 0, 1), new Date(2020, 0, 2))
