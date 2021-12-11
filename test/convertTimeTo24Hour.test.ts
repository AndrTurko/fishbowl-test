import { convertTimeTo24Hour } from "../src/convertTimeTo24Hour";

describe("test convertTimeTo24Hour function", () => {
  it('3 pm should be equal [15, 0]', () => {
    expect(convertTimeTo24Hour('3 pm')).toEqual([15, 0]);
  });
  it('12:30 am should be equal [0, 30]', () => {
    expect(convertTimeTo24Hour('12:30 am')).toEqual([0, 30]);
  });
  it('5:00 pm should be equal [17, 0]', () => {
    expect(convertTimeTo24Hour('5:00 pm')).toEqual([17, 0]);
  });
});
