console.log("===========Palindrome Program=============");

function checkPalindrome(string) {
    // convet string to an array
    const arrayValue = string.split('');

    // reverse the array value
    const reverseArrayValue = arrayValue.reverse();

    // convert array to string
    const reverseString = reverseArrayValue.join('');

    if (string == reverseString) {
        console.log(`${string} : Palindrome`);  
    }
    else {
        console.log(`${string} : Not Palindrome`);  
    }  
}
checkPalindrome("madam");
checkPalindrome("dad");
checkPalindrome("hello");

console.log("===========Anagram Program=============");

function ckeckAnagramWithSort(str1 , str2) {
    let newStr1 = str1.toLowerCase().replace('').split('').sort().join('')
    let newStr2 = str2.toLowerCase().replace('').split('').sort().join('')

    return (newStr1 === newStr2);
}
const result = ckeckAnagramWithSort("Slient","Listen");
console.log(`Silent,Listen is Anagram : ${result}`);
const result1 = ckeckAnagramWithSort("Hello","Word");
console.log(`Hello,Word is Anagram : ${result1}`);
const result2 = ckeckAnagramWithSort("Such","much");
console.log(`Such,much is Anagram : ${result2}`);