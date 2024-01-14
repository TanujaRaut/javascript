
// 1.
class Vehicle {
  constructor(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
  }

  logDetails() {
    console.log(`Vehicle Details: ${this.year} ${this.color} ${this.make} ${this.model}, Mileage: ${this.mileage} miles`);
  }
}

const arrayOfVehicles = [];
const vehicle1 = new Vehicle('Toyota', 'Camry', 2020, 'Blue', 30000);
const vehicle2 = new Vehicle('Honda', 'Civic', 2018, 'Red', 25000);
const vehicle3 = new Vehicle('Ford', 'Escape', 2022, 'Silver', 15000);
const vehicle4 = new Vehicle('Chevrolet', 'Malibu', 2019, 'Black', 35000);
const vehicle5 = new Vehicle('Nissan', 'Altima', 2021, 'White', 20000);

arrayOfVehicles.push(vehicle1, vehicle2, vehicle3, vehicle4, vehicle5);

for (const vehicle of arrayOfVehicles) {
  vehicle.logDetails();
}

// 2.
class College {
  constructor(name, location, students, courses) {
    this.name = name;
    this.location = location;
    this.students = students;
    this.courses = courses;
  }

  display() {
    console.log(`College Details: ${this.name} located at ${this.location}. Students: ${this.students}, Courses: ${this.courses}`);
  }
}

const college1 = new College('PRMCEM College', 'City A', 5000, ['Computer Science', 'Business']);
const college2 = new College('XYZ University', 'City B', 8000, ['Engineering', 'Medical']);
const college3 = new College('LMN Institute', 'City C', 3000, ['Arts', 'Science']);
const college4 = new College('PQR Academy', 'City D', 6000, ['Social Sciences', 'Mathematics']);

const collegeArray = [college1, college2, college3, college4];

for (const college of collegeArray) {
  college.display();
}

// 3.
function traverseObject(obj) {
  for (const key in obj) {
    console.log(`${key} ${obj[key]}`);
  }
}

// 3.1
for (const college of collegeArray) {
  traverseObject(college);
}



