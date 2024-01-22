console.log("==============Add 10 into each Element & log=================");

const arrayNumbers = [20,11,40,25,23,11,9,31,60,29];

const array = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
} );
  console.log(array);

  console.log("============Cube the each array element & log===============");

  const arrayTransformed = arrayNumbers.map( (currentValue) => {
    return currentValue * currentValue * currentValue;
} );
console.log(arrayTransformed);

console.log("==Add the index value into its coresponding each arry element & log==");

const arrays = arrayNumbers.map( (currentValue , index) => {
  console.log(`Element at index  ${index} : ${currentValue}`);
} );
