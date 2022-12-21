const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    const array = [];
    const array2 = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
    ];
    const array3 = [{ name: "Lewis" }, { name: "Bradley" }, { name: "Connor" }];
    expect(joinNames(array2)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(array)).toEqual(undefined);
    expect(joinNames(array3)).toEqual("Lewis, Bradley & Connor");
  });
});

// function should take array of objects and concatenate the names
// together into a string, separated by commas, and an ampersand for
// the last name. Consider array length.
