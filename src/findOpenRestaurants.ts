import * as fs from 'fs';
import * as readline from 'readline';

import { getTimeBeforeClose } from './getTimeBeforeClose';
import { checkIsDayValid } from './checkIsDayValid';

const parseCsvLine = (line: string): string[] => {
  return line.split(/","/).map(str => str.replace(/"/g, '')); // TODO: find better way to remove quotes
}

const parseWorkTime = (workTime: string): string[] => {
  const workingDaysAndHours = workTime.split(/\s\/\s/);

  return workingDaysAndHours;
}

export async function findOpenRestaurants(csvFilename: string, searchDatetime: Date): Promise<{ name: string; timeBeforeClose: number }[]> {
  const openRestaurants: { name: string; timeBeforeClose: number }[] = []

  const fileStream = fs.createReadStream(csvFilename);
  const rl = readline.createInterface({
    input: fileStream
  });

  for await (const line of rl) {
    const [restaurantName, workTime] = parseCsvLine(line);

    const workingDaysAndHours = parseWorkTime(workTime);
    workingDaysAndHours.forEach((workingDayAndHours: string) => { // TODO: refactor
      const [days, timeRange] = workingDayAndHours.split(/(?<=\w)(?:(?:\s)(?=\d))/);
      const isDayValid: boolean = checkIsDayValid(searchDatetime.getDay(), days);

      if (isDayValid) {
        const timeBeforeClose = getTimeBeforeClose(searchDatetime, timeRange);

        if (timeBeforeClose !== -1) {
          openRestaurants.push({ name: restaurantName, timeBeforeClose });
        }
      }
    })
  }

  return openRestaurants.sort((a, b) => a.timeBeforeClose - b.timeBeforeClose);
}
