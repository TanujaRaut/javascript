function factorialOfWordsCount(words){
  
    let result = 1;
    var wordSplit = words.split(" ");
    
    console.log(`Total words in the string is: ${wordSplit.length} `);

    for (let index=1; index <=wordSplit.length; index++) {
       result= result * index;  
    }
    console.log(`Factorial of given string is :${result}`);
}

factorialOfWordsCount("Revision is the mother of Success");

factorialOfWordsCount("We never fail, we always learn, Mind it");

factorialOfWordsCount("");

factorialOfWordsCount("Tanuja Ramkrushna Raut");

let words = null;   
console.log(`Invalid  Input : ${words}`); 