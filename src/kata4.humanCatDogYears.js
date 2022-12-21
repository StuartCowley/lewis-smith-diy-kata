const humanCatDogYears = (number) => {
  const humanAge = number;
  let catAge = 0;
  let dogAge = 0;
  if (number === 0) {
    catAge = 0;
    dogAge = 0;
  } else if (number === 1) {
    catAge = 15;
    dogAge = 15;
  } else if (number === 2) {
    catAge = 24;
    dogAge = 24;
  } else {
    catAge = 24 + (number - 2) * 4;
    dogAge = 24 + (number - 2) * 5;
  }

  const ageArray = [];
  ageArray.push(humanAge, catAge, dogAge);
  return ageArray;
};

module.exports = humanCatDogYears;
