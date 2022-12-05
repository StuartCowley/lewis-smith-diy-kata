const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
    expect(numberToReversedDigits(6789)).toEqual([9, 8, 7, 6]);
    expect(numberToReversedDigits(72849285564956)).toEqual([
      6, 5, 9, 4, 6, 5, 5, 8, 2, 9, 4, 8, 2, 7,
    ]);
  });
});
