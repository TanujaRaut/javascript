console.log("=========================Step 1=======================================");

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return  "Even";
  }  else{
    return "Odd";
  } 
}
 var result = isEvenOrOdd(45);
 console.log(` Given no. is 45:  ${result}`);
 var result = isEvenOrOdd(70);
 console.log(` Given no. is 70: ${result}`);
 var result = isEvenOrOdd(67);
 console.log(` Given no. is 67: ${result}`); 
 var result = isEvenOrOdd(98);
 console.log(` Given no. is 98: ${result}`);

 console.log("=========================Step 2=======================================");

 var  voteEligibility = function(age){
    if (age>=18) {
        return ("This person are eligible for voting");
    } else {
        return ("This person are not eligible for voting");
    }
 }
  var result = voteEligibility(18);
  console.log(`age is 18: ${result}`);
  var result = voteEligibility(20);
  console.log(`age is 20: ${result}`);
  var result = voteEligibility(17);
  console.log(`age is 17: ${result}`);
  var result = voteEligibility(40);
  console.log(`age is 40: ${result}`);

console.log("=========================Step 3=======================================");
    var word = function(string){
    var name=string.length;
    console.log(`String length is: ${name}`);
     if (string.length>10)//(name>10)
    {
      console.log(`Given String length is greater than : 10`);
    } else {
      console.log(`Given String length is less than : 10`);
    }
   }
   var result= word("JavaScript-ES6");

console.log("=========================Step 4=======================================");
   var startWith= function(string){

    if (string.startWith="Java") {
     console.log(`Given string start with "Java"`);
    } else {
     console.log(`Given string not start with "Java"`);
    }
    }
    var result=startWith("JavaScript Language");
  

 
 
 