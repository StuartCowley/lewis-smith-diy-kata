const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
    expect(fizzBuzz(6)).toEqual("Fizz");
    expect(fizzBuzz(9)).toEqual("Fizz");
    expect(fizzBuzz(33)).toEqual("Fizz");
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(40)).toEqual("Buzz");
    expect(fizzBuzz(50)).toEqual("Buzz");
  });
  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(60)).toEqual("FizzBuzz");
    expect(fizzBuzz(240)).toEqual("FizzBuzz");
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(16)).toEqual(16);
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(13)).toEqual(13);
  });
});
