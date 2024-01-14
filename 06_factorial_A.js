function factorialOfNum(num) {
    if (num == null || num == undefined ) {
      return "Invalid Number";
    }
  
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  console.log("Factorial of 5: " , factorialOfNum(5));
  console.log("Factorial of 3: " , factorialOfNum(3));
  console.log("Factorial of null: " , factorialOfNum(null));
  console.log("Factorial of 8: " , factorialOfNum(8));
  console.log("Factorial of undefined: " , factorialOfNum(undefined));
  console.log("Factorial of 9: " , factorialOfNum(9));
  console.log("Factorial of 0: " , factorialOfNum(0));
  