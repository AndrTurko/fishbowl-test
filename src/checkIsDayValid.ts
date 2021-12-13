import { WEEK_DAYS } from "./constants/weekDays";

export function checkIsDayValid(day: number, operationDays: string): boolean {
  const [daysRange, additionalDay] = operationDays.split(/,\s/);
  const [startDay, endDay] = daysRange.split(/-/);

  if (startDay && !endDay) {
    return day === WEEK_DAYS.indexOf(startDay);
  }

  return (day >= WEEK_DAYS.indexOf(startDay) && day <= WEEK_DAYS.indexOf(endDay))
  || (!!additionalDay && day === WEEK_DAYS.indexOf(additionalDay));
}
