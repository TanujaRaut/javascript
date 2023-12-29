console.log("===============================Step 1==================================");

function stringHandsOn() {
    var string = ("   Hey you are doing good, keep it up   ");
    console.log(`Given String is => ${string} `);

console.log("=========================Step 2======================================== ");
    
    console.log(` Length of string is => ${string.length}`);

console.log("=========================Step 3=======================================");
    
    var  trimedString = string.trim();
    console.log(` After trim steing is => ${trimedString} , It is Length => ${trimedString.length}`);

console.log("=========================Step 4==========================================");
    
    var extraSpacesCount = string.length - trimedString.length;
    console.log(` Total number of extra spaces removed => ${extraSpacesCount}`);

console.log("=========================Step 5================================================");
        
     var char1 = trimedString.charAt(0)
     var char2 = trimedString.charAt(trimedString.length-1)
     console.log(` First and last character Given string is => ${char1} And ${char2}`);

console.log("=========================Step 6============================================");
    
    console.log(` Total words of character in string => ${trimedString.split(" ").length}`);

console.log("=========================Step 7============================================");
    
    var  indexOfGood = trimedString.indexOf("good");
    console.log(` Index of the word "good" => ${indexOfGood}`);

console.log("=========================Step 8=====================================");
    
    const substringUsingSubstring = trimedString.substring(22);
    const substringUsingSlice = trimedString.slice(22);
    console.log(` Substring starting from index 22 => ${substringUsingSubstring}  ,  Slice starting from index 22 => ${substringUsingSlice}`);

console.log("=========================Step 9======================================="); 
  
    var  endsWithUp = trimedString.endsWith("up");
    console.log(` String end with "up" => ${endsWithUp}`);

console.log("=========================Step 10===========================================");
    
    const startsWithHey = trimedString.startsWith("Hey");
    console.log(` string start with "Hey" => ${startsWithHey}`);
  }
  stringHandsOn();
  