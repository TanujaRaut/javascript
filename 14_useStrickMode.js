'use strict';
let city = "pune";
console.log(city);

let array = [1,2,3,4,5];
console.log(array);
console.log(...array);


let array1 = ["Jenny", "Elon", "Bill", "Stew"];
console.log(array1);
console.log(...array1);

console.log(`Rest Parameter`);
function show(n1, n2, ...arg){ // Rest Parameter
    console.log(n1);
    console.log(n2);
    console.log(arg);
}
show(10, 20, 30, 40, 50);
