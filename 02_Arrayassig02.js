console.log("===============Find the Total number Element==================");

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(`Total number of element : ${arrayNumbers.length}`);

console.log("==============Log the first & Last Element in Array===========");

const first_element = "20";
console.log(`First Element is : ${first_element}`);
const last_element = "11";
console.log(`Last Element is : ${last_element}`);

console.log("==========Log the third last element using lenght property=====");

const array = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(`Third Last element :  ${array[array.length-3]}`);

console.log("============Even No. using for of loop=============================");

for (const num of array) {
  if(num %2 == 0) {
    console.log(num);
  }
  } 
console.log("=============Odd No. using for of loop========================");
for (const num of array) {
  if (num % 2 !== 0) {
    console.log(num);
  } 
}

console.log("========Even positioned element from Array , sum it===============");
let arrayNNN = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];  
let sums = 0;
for (const index in arrayNNN) {
    if (index%2==0) {
        const element = arrayNNN[index];
        console.log(element);
        sums = sums + element
    }
}console.log(`Sum of elements at even index is: ${sums}`);

console.log("===========Odd positioned element from Array , sum it============");

let arrayNNNN = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];  
let sumss = 0;
for (const index in arrayNNNN) {
    if (index%2==1) {
        const element = arrayNNNN[index];
        console.log(element);
        sumss = sumss+element
    }
}console.log(`Sum of elements at odd index is: ${sumss}`);

console.log("==============Sum of all element from Array====================");

let arrays = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];  
let sum = 0;
for (const index in arrays) {
  console.log(arrays[index]);
  sum = sum + arrays[index];  
  }
  console.log(`Sum of all array element are : ${sum}`);

console.log("===========Find the no. which are multiple of 5=================");

for (const num of array) {
  if (num % 5 == 0) {
    console.log(num);
  } 
}
console.log("============115 available in Array==========================");

const arrayNumber = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(arrayNumber.includes(115));

console.log("=============23 available in Array==========================");

const arrayNum = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(arrayNum.includes(23));

console.log("===========Insert numbers -> 55,66 at index 3===============");

const arrayNN = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(arrayNN);
arrayNN.splice(3, 0, 55, 66 )
console.log(arrayNN);

console.log("=========Delete 3 element starting from index 4===============");

const arrayN = [20, 31, 40, 25, 23, 11, 29 ,9, 60, 2, 11];
console.log(arrayN);
arrayN.splice(4, 3 )
console.log(arrayN);















 