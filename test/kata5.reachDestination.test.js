const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(30, 15)).toEqual("I should be there in 2 hours.");
    expect(reachDestination(60, 45)).toEqual("I should be there in 1.5 hours.");
    expect(reachDestination(60, 15)).toEqual("I should be there in 4 hours.");
    expect(reachDestination(12, 45)).toEqual("I should be there in 0.5 hours.");
    expect(reachDestination(22.5, 30)).toEqual("I should be there in 1 hour.");
  });
});
