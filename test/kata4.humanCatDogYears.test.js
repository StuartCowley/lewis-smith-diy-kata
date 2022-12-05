const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test("returns human, cat, and dog yeats in an array", () => {
    expect(humanCatDogYears(0)).toEqual([0, 0, 0]);
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    expect(humanCatDogYears(31)).toEqual([31, 140, 169]);
  });
});
