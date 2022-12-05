const numberToReversedDigits = (number) => {
  const stringArray = number.toString().split("").reverse();
  const numberArray = stringArray.map(Number);
  return numberArray;
};

module.exports = numberToReversedDigits;


/*
You could use an for loop to iterate over each individual
numbered string, and then parseint onto each index; followed
by pushing onto an empty array.

You could use a forEach loop - you'd ensure you have your 
array of stringed numbers; initialised an empty array;
use to forEach method to .push(+i).  The + signifies the 
int operator should it precede the new array in the push function.

Example
const numberToReversedDigits = (number) => {
    const stringArray = number.toString().split("").reverse();
    const numberArray = [];
    stringArray.forEach(i => numberArray.push(+i));
    return numberArray;
}
/*