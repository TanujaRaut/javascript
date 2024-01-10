let professor = {
    profName:"A. A. Ali",
    age:34,
    subject:"Adavance Java",
    designation:"Principal",
    adress:"Pune",
    degree:{
    engineering:"CSC",
    phd:"Adv Computing",
    },
 certificates:["Hacker Rank Participation","Certificate in IFE course","Cerificate  in Adv Programing"],
 totalExperience:{
  }
 }
 console.log("========================= Step 1 ===========================================");
 console.log(professor);
 console.log("========================= Step 2 ===========================================");
 console.log(professor.degree);
 console.log("========================= Step 3 ===========================================");
 console.log(professor.certificates);
 console.log("========================= Step 4 ===========================================");
 professor.totalExperience.experience="14 years";
 console.log(professor.totalExperience);
 console.log("========================= Step 5 ===========================================");
 professor.adress="Mumbai";
 console.log(professor);
 console.log("========================= Step 6 ===========================================");
 console.log("Add new Certificate is :");
 professor.certificates.push("Oracle Certified");
 console.log(professor.certificates);
 console.log("========================= Step 7 ===========================================");
 let lastElement=professor.certificates.splice(-1);
console.log(lastElement);
console.log("========================== Step 8 ====================================");
console.log(professor);
console.log("=========================== Step 7 ===============================");
for (const key of professor.certificates) {
   const element = professor.certificates[key];
        console.log(`Certificate = ${key}`);
}