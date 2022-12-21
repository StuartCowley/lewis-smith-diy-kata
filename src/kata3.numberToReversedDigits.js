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

Example forEach
const numberToReversedDigits = (number) => {
    const stringArray = number.toString().split("").reverse();
    const numberArray = [];
    stringArray.forEach(i => numberArray.push(+i));
    return numberArray;
}
/*
/* Example Reduce
const numberToReversedDigits = (number) => {
    const stringArray = number.toString().split("").reverse();
    let numberArray = stringArray.reduce((acc, x) => acc.concat(+x), []);
    return numberArray;
}

Breakdown of the reduce method:
    You want to reduce the string array (using variables 
        acc for accumulator, and x for its current index value.
        Then, the function itself stipulates to take the value of acc
        and concatenate it, in and of itself, takes each element, and
        squeezes them together inside one individual string.  From there
        the (+x), [] then parses it as an integer, and pushes into
        an array, respectively */
