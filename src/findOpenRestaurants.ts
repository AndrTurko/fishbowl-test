import * as fs from 'fs';
import * as readline from 'readline';

import { getTimeBeforeClose } from './getTimeBeforeClose';
import { checkIsDayValid } from './checkIsDayValid';
import { parseCsvLine } from './parseCsvLine';

interface OpenRestaurant {
  name: string;
  timeBeforeClose: number;
}

export async function findOpenRestaurants(csvFilename: string, searchDatetime: Date): Promise<OpenRestaurant[]> {
  const openRestaurants: OpenRestaurant[] = []
  const fileStream = fs.createReadStream(csvFilename);
  const rl = readline.createInterface({
    input: fileStream
  });

  for await (const line of rl) {
    const [restaurantName, operationHours] = parseCsvLine(line);

    operationHours
      .split(/\s\/\s/)
      .forEach((operationDaysAndHours: string) => {
      const [operationDays, operationHours] = operationDaysAndHours.split(/(?<=\w)(?:(?:\s)(?=\d))/);
      const isDayValid: boolean = checkIsDayValid(searchDatetime.getDay(), operationDays);

      if (isDayValid) {
        const timeBeforeClose = getTimeBeforeClose(searchDatetime, operationHours);

        if (timeBeforeClose !== -1) {
          openRestaurants.push({ name: restaurantName, timeBeforeClose });
        }
      }
    })
  }

  return openRestaurants.sort((a, b) => a.timeBeforeClose - b.timeBeforeClose);
}
