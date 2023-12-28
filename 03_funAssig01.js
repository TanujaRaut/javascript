console.log("=======================Step 1==================================");

console.log("Hello, I am Tanuja");
console.log("Good Thoughts  make a happy Person");

console.log("=======================Step 1==================================");


function personalDetails(firstName, lastName, collegeName) {
  console.log("First Name:",firstName,', ', "Last Name:",lastName,' ,', "College Name: ",collegeName);
}
personalDetails("Tanuja", "Raut", "PRMCAM");

console.log("=======================Step 3==================================");

function swapValues(n1, n2) {
  console.log("Before Swap: ", n1 , n2);
  
  n1, n2 = n2, n1;
  console.log ("After Swap: ", n2, n1 );
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("=======================Step 4==================================");


function addThreeValues(a, b, c) {
  console.log("Sum of Three Values: ", (a+b+c));

}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");
