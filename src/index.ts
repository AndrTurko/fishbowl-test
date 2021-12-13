import { findOpenRestaurants } from './findOpenRestaurants';

(async function() {
  const csvFilename = './restaurants.csv';
  const searchDatetime: Date = new Date('Dec 13 2021 12:00:00');
  const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);

  console.log(openRestaurants);
}());
