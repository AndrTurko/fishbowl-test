export function convertTimeTo24Hour(time12hour: string): number[] {
  const [time, period] = time12hour.split(/\s/);

  let [hours, minutes] = time.split(':').map(entry => parseInt(entry));

  if (hours === 12) {
    hours = 0;
  }

  if (period === 'pm') {
    hours = hours + 12;
  }

  if (minutes === undefined) {
    minutes = 0;
  }

  return [hours, minutes];
}
