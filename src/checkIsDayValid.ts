import { WEEK_DAYS } from "./constants/weekDays";

export function checkIsDayValid(day: number, days: string): boolean {
  const [daysRange, additionalDay] = days.split(/,\s/);
  const [startDay, endDay] = daysRange.split(/-/);

  return (day >= WEEK_DAYS.indexOf(startDay) && day <= WEEK_DAYS.indexOf(endDay))
    || (!!additionalDay && day === WEEK_DAYS.indexOf(additionalDay));
}
