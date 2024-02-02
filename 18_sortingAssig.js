console.log("=======================Step 1==================================");

const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Given aaray is ${arrayRollNumbers}`);

console.log("=========Reverse the Array==========");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log("=======================Step 2==================================");
//sort method
const arrayRollNumber = [113,45,56,11,32,45,109,799,56,45];
arrayRollNumber.sort();
console.log(arrayRollNumber);
console.log("=======================Step 3==================================");
//sort the array in ascending order 
const array = [113,45,56,11,32,45,109,799,56,45];
array.sort( (a , b) =>{
    return a>b ? 1 : -1; 
});
console.log(array);

console.log("=======================Step 4==================================");
//find Greatest Numbers
console.log(`Greatest Numbers  :  ${array[array.length-1]}`);

console.log("=======================Step 5==================================");

//console.log(`Smallest  Numbers`);
console.log(`Smallest Numbers : ${array[0]}`);

console.log("=======================Step 6==================================");

console.log(`Removing duplicate elements from an array`);
let arrayss = [113,45,56,11,32,45,109,799,56,45];
console.log(array);

const newArray = [...new Set(arrayss)];
console.log(newArray);


