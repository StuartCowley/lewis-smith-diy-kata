/* eslint-disable no-plusplus */
const joinNames = (namesObj) => {
    const namesArr = namesObj.map(person => person.name);
    let nameStr = '';
    namesArr.forEach((name, index) => {
        if(index === namesArr.length - 2) {
           nameStr += name + ' & ';
        } else if (index === namesArr.length - 1) {
           nameStr += name + '';
        } else {
            nameStr += name + ', ';
        }
    });
    return(nameStr !== "" ? nameStr : undefined);
};

module.exports = joinNames;
