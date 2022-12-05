const numberToReversedDigits = (number) => {
  const stringArray = number.toString().split("").reverse();
  const numberArray = stringArray.map(Number);
  return numberArray;
};

module.exports = numberToReversedDigits;
