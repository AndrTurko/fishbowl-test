import { findOpenRestaurants } from "../src/findOpenRestaurants";

describe("test findOpenRestaurants function", () => {
  it('should return name and time to close of open at Dec 11 2021 23:33:00 restaurants', async () => {
    const csvFilename = './test/testRestaurants.csv';
    const searchDatetime: Date = new Date('Dec 11 2021 23:33:00');
    const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);
    expect(openRestaurants).toEqual([
      { name: 'Hanuri', timeBeforeClose: 1620000 },
      { name: 'Bamboo Restaurant', timeBeforeClose: 1620000 },
      { name: 'Viva Pizza Restaurant', timeBeforeClose: 1620000 },
      { name: 'Thai Stick Restaurant', timeBeforeClose: 5220000 },
      { name: 'Marrakech Moroccan Restaurant', timeBeforeClose: 8820000 },
      { name: "Naan 'N' Curry", timeBeforeClose: 16020000 }
    ]);
  });
  it('should return name and time to close of open at Dec 13 2021 01:12:00 restaurants', async () => {
    const csvFilename = './test/testRestaurants.csv';
    const searchDatetime: Date = new Date('Dec 13 2021 01:12:00');
    const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);
    expect(openRestaurants).toEqual([
      { name: 'Marrakech Moroccan Restaurant', timeBeforeClose: 2880000 },
      { name: "Naan 'N' Curry", timeBeforeClose: 10080000 }
    ]);
  });
  it('should return name and time to close of open at Dec 12 2021 10:00:00 restaurants', async () => {
    const csvFilename = './test/testRestaurants.csv';
    const searchDatetime: Date = new Date('Dec 12 2021 10:00:00');
    const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);
    expect(openRestaurants).toEqual([
      { name: 'All Season Restaurant', timeBeforeClose: 41400000 },
      { name: 'Tong Palace', timeBeforeClose: 41400000 },
      { name: 'Herbivore', timeBeforeClose: 43200000 },
      { name: 'Sabella & La Torre', timeBeforeClose: 45000000 },
      { name: "Santorini's Mediterranean Cuisine", timeBeforeClose: 45000000 },
      { name: 'India Garden Restaurant', timeBeforeClose: 46800000 }
    ]);
  });
  it('should return name and time to close of open at Dec 13 2021 12:00:00 restaurants', async () => {
    const csvFilename = './test/testRestaurants.csv';
    const searchDatetime: Date = new Date('Dec 13 2021 12:00:00');
    const openRestaurants = await findOpenRestaurants(csvFilename, searchDatetime);
    expect(openRestaurants).toEqual([
      { name: 'Kushi Tsuru', timeBeforeClose: 32400000 },
      { name: 'Osakaya Restaurant', timeBeforeClose: 32400000 },
      {
        name: "Sam's Grill & Seafood Restaurant",
        timeBeforeClose: 32400000
      },
      { name: 'Restaurant Lulu', timeBeforeClose: 32400000 },
      { name: 'Iroha Restaurant', timeBeforeClose: 34200000 },
      {
        name: 'Canton Seafood & Dim Sum Restaurant',
        timeBeforeClose: 34200000
      },
      { name: 'All Season Restaurant', timeBeforeClose: 34200000 },
      { name: 'Shanghai China Restaurant', timeBeforeClose: 34200000 },
      { name: 'Isobune Sushi', timeBeforeClose: 34200000 },
      { name: 'Tong Palace', timeBeforeClose: 34200000 },
      { name: 'The Stinking Rose', timeBeforeClose: 36000000 },
      { name: "McCormick & Kuleto's", timeBeforeClose: 36000000 },
      { name: 'Mifune Restaurant', timeBeforeClose: 36000000 },
      { name: 'New Delhi Indian Restaurant', timeBeforeClose: 36000000 },
      { name: 'Rose Pistola', timeBeforeClose: 36000000 },
      { name: '2G Japanese Brasserie', timeBeforeClose: 36000000 },
      { name: 'Herbivore', timeBeforeClose: 36000000 },
      { name: 'Penang Garden', timeBeforeClose: 36000000 },
      { name: "John's Grill", timeBeforeClose: 36000000 },
      { name: 'Quan Bac', timeBeforeClose: 36000000 },
      { name: 'Burger Bar', timeBeforeClose: 36000000 },
      { name: 'Blu Restaurant', timeBeforeClose: 36000000 },
      { name: 'Tres', timeBeforeClose: 36000000 },
      { name: 'Far East Cafe', timeBeforeClose: 36000000 },
      { name: 'Parallel 37', timeBeforeClose: 36000000 },
      { name: 'Paragon Restaurant & Bar', timeBeforeClose: 36000000 },
      { name: 'Chili Lemon Garlic', timeBeforeClose: 36000000 },
      { name: "Cesario's", timeBeforeClose: 36000000 },
      { name: 'Colombini Italian Cafe Bistro', timeBeforeClose: 36000000 },
      { name: 'Soluna Cafe and Lounge', timeBeforeClose: 36000000 },
      { name: 'Bombay Indian Restaurant', timeBeforeClose: 37800000 },
      { name: "Nick's Lighthouse", timeBeforeClose: 37800000 },
      { name: 'Bow Hon Restaurant', timeBeforeClose: 37800000 },
      { name: 'Sabella & La Torre', timeBeforeClose: 37800000 },
      {
        name: "Santorini's Mediterranean Cuisine",
        timeBeforeClose: 37800000
      },
      { name: 'Kyoto Sushi', timeBeforeClose: 37800000 },
      { name: 'The Cheesecake Factory', timeBeforeClose: 39600000 },
      { name: "Alioto's Restaurant", timeBeforeClose: 39600000 },
      { name: 'Bai Thong Thai Cuisine', timeBeforeClose: 39600000 },
      { name: 'Alhamra', timeBeforeClose: 39600000 },
      { name: 'San Dong House', timeBeforeClose: 39600000 },
      { name: 'India Garden Restaurant', timeBeforeClose: 39600000 },
      { name: 'Sapporo-Ya Japanese Restaurant', timeBeforeClose: 39600000 },
      { name: 'Hanuri', timeBeforeClose: 43200000 },
      { name: 'Bamboo Restaurant', timeBeforeClose: 43200000 },
      { name: 'Viva Pizza Restaurant', timeBeforeClose: 43200000 },
      { name: 'Sudachi', timeBeforeClose: 45000000 },
      { name: 'Thai Stick Restaurant', timeBeforeClose: 46800000 },
      { name: 'Marrakech Moroccan Restaurant', timeBeforeClose: 50400000 },
      { name: "Naan 'N' Curry", timeBeforeClose: 57600000 }
    ]);
  });
});
