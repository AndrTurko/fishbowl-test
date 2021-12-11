import { findOpenRestaurants } from "../src/findOpenRestaurants";

describe("test findOpenRestaurants function", () => {
  it('should return name and time to close of open restaurants', async () => {
    const csvFilename = './test/testRestaurants.csv';
    const searchDatetime: Date = new Date('Dec 11 2021 23:33:00');
    const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);
    expect(openRestaurants).toEqual([
      { name: 'Hanuri', timeBeforeClose: 1620000 },
      { name: 'Viva Pizza Restaurant', timeBeforeClose: 1620000 },
      { name: 'Thai Stick Restaurant', timeBeforeClose: 5220000 },
      { name: 'Marrakech Moroccan Restaurant', timeBeforeClose: 8820000 },
      { name: "Naan 'N' Curry", timeBeforeClose: 16020000 }
    ]);
  });
});
