console.log("================= Step 1 ==========================");
const bankSbi={
 bankName:"SBI bank",
 address:"Amravati",
 ifcCode:"SBIN006789",
 deposit:"Fixed Deposite"
}
console.log(`SBI Bank Details is:`);
console.log(bankSbi);

console.log("================ Step 2 ===========================");
const banklocation={
    street:"Sai Nagar, Amravati, Maharastra-444601",
    city:"Amravati",
    pin:444601
}
console.log(`Bank Location is:`);
console.log(banklocation);

console.log("============= Step 3 =================");
console.log(`Clone result of bankSbi and bankLocation is: `);
const cloneobject=Object.assign({},bankSbi,banklocation);
console.log(cloneobject);

console.log("================= Step 4 ===================");
const rateOfInterest={
    homeLoanInterest:"8.45% p.a.",
    personalLoanInterest:"10.50% p.a.",
    dueInterest:"7.20% p.a."
}
console.log(`The rate of Interest is:`)
console.log(rateOfInterest);

console.log("================ Step 5 ==========================-");
console.log(`Merge result of bankSbi,bankLocation,rateofInterest is:`);
const merge = Object.assign({},bankSbi,banklocation,rateOfInterest);
console.table(JSON.stringify(merge));

console.log("================= Step 6 =======================");
console.log(`Traverse merge object is:`);

for (const key in merge) {
    if (Object.hasOwnProperty.call(merge, key)) {
        const element = merge[key];
        console.log(`${key} : ${element}`);
    }
}



