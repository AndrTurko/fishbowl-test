import { findOpenRestaurants } from './findOpenRestaurants';

(async function() {
  const csvFilename = './restaurants.csv';
  const searchDatetime: Date = new Date('Dec 11 2021 23:33:00');
  const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);

  console.log(openRestaurants);
}());
