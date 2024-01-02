console.log("==============Que 1=====================");

function squareOfWordLength(word) {
    var length = word.length;
    var square = length * length;
console.log(` The Square of word length is: "${word}": ${square}`);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("==============Que 2=====================");
function calculateAndLog() {
    var inputString = "I am Angular Developer";
    var words = inputString.split(' ');
    var totalWords = words.length;

    var stringLength = inputString.length;
    console.log(`String Lenght is : ${stringLength} `);
    console.log(`Total  Words available in String is : ${totalWords}`)
    console.log(`Division of string lenght and total number of words is: ${stringLength / totalWords}`);
    console.log(`The String multiplication is: ${stringLength * totalWords}`);
}
calculateAndLog();




