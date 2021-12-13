import { convertTimeTo24Hour } from './convertTimeTo24Hour';

export function getTimeBeforeClose(searchDatetime: Date, operationHours: string): number {
  const [startTime, endTime] = operationHours.split(/\s-\s/);

  const currentYear = searchDatetime.getFullYear();
  const currentMonth = searchDatetime.getMonth();
  const currentDay = searchDatetime.getDate();

  const [startHours, startMinutes] = convertTimeTo24Hour(startTime);
  const [endHours, endMinutes] = convertTimeTo24Hour(endTime);

  const nextDay = startHours > endHours && searchDatetime.getHours() >= 12 ? 1 : 0;

  const startDate = new Date(currentYear, currentMonth, currentDay, startHours, startMinutes);
  const endDate = new Date(currentYear, currentMonth, currentDay + nextDay, endHours, endMinutes);

  if ((searchDatetime.getTime() >= startDate.getTime() || startHours > endHours && searchDatetime.getHours() <= 12)
    && searchDatetime.getTime() <= endDate.getTime()) {
    return endDate.getTime() - searchDatetime.getTime();
  }

  return -1;
}
