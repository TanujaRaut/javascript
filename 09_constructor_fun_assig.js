
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

console.log("Step 2====================================");

const yesBank = new Bank("Yes Bank", "Pune", "YES123", "BR123");
console.log(`Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, Ifsc Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);

const sbiBank = new Bank("SBI Bank", "Mumbai", "SBI456", "BR456");
console.log(`Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, Ifsc Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);

const mahBank = new Bank("Mah Bank", "Nagpur", "MAH789", "BR789");
console.log(`Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, Ifsc Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank", "Amravati", "AXIS012", "BR012");
console.log(`Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, Ifsc Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

console.log("Step 5==================================");

console.log(`SBI Bank Opning Time: ${sbiBank.openTime}`);
console.log(`SBI Bank Closing Time: ${sbiBank.closeTime}`);

console.log("Step 6==================================");

console.log(`Axis Bank Name: ${axisBank.bankName}`);
console.log(`Closing Time: ${axisBank.closeTime}`);

console.log("Step 7==================================");

console.log(`Bank Name : ${yesBank.bankName}`);
console.log(`Branch Code : ${yesBank.branchCode}`);
console.log(`Opening Time : ${yesBank.openTime}`);

