console.log("=======================Step 1==================================");

const arrayNummbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNummbers.forEach( (currentValue,index) => {
    console.log(`Element at index  ${index} : ${currentValue}`);
} );

console.log("=======================Step 2==================================");


arrayNummbers.forEach( (Element) => {
    if (Element > 0) {
        console.log(`Positive Number : ${Element}`);
    }
} );

console.log("=======================Step 3==================================");


const negativeNumbers = [];
arrayNummbers.forEach( (Element) => {
    if (Element < 0) {
        negativeNumbers.push(Element);   
    }
} );
   console.log('Negative Numbers : ', negativeNumbers);

console.log("=======================Step 4==================================");


 arrayNummbers.forEach( (Element) => {
    if (Element%2==0) {
        console.log("Even Numbers :", Element);    
    }
 } );

 console.log("=======================Step 5==================================");
 
 const sum = arrayNummbers.reduce( (totalMarks, currentValue) =>{
    return totalMarks + currentValue;
}, 0);
console.log(`Sum of all element : ${sum}`);

 
    
 

 console.log("=======================Step 6==================================");


 arrayNummbers.forEach( (currentValue,index) => {
    if (index %2==0) {
    console.log(`Even Index Element ${index} : ${currentValue}`);
    }
 } );

