function isPalindrom(str1) {
  const a = str1.split("").reverse().join("");

if (a===str1) {
    console.log(true);
}
else{
    console.log(false);
}
}
isPalindrom("madam")
isPalindrom("dad")
console.log("============Anagram ===============");
function isAnagram(str1,str2) {
  const a= str1.split("").sort().join("");
  const b= str2.split("").sort().join("");

  if (a===b) {
    console.log(true);
  }
   else{
    console.log(false);
   }
  }
isAnagram("silent","listen");
isAnagram("Hello","World");
isAnagram("such","much");

