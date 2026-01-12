/*------------------------------------------- OBJECT TASKS -------------------------------------------*/

//////////////////////////////////////////// TASK No 01 ///////////////////////////////////////////////

/* Task 1: Access Employee Information
Scenario
A company stores employee data in an object.
const company = {
name: "Tech Solutions",
employees: {
emp1: { name: "Ali", role: "Developer", salary: 80000 },
emp2: { name: "Sara", role: "Designer", salary: 70000 }
}
};
Task:
 Log Ali’s role
 Log Sara’s salary */

const company = {
    name: "Tech Solutions",
    employees: {
        emp1: { name: "Ali", role: "Developer", salary: 80000 },
        emp2: { name: "Sara", role: "Designer", salary: 70000 }
    }
};

console.log(company.employees.emp1.role); // Will Print Ali Role
console.log(company.employees.emp2.salary); // Will Print Sara Salary

//////////////////////////////////////////// TASK No 02 ///////////////////////////////////////////////
/* Task 2: Update Object Property
Scenario
An online store wants to update product price.
const product = {
id: 101,
name: "Headphones",
price: 3500
};
Task:
 Change the price to 4000
 Log the updated product object */

const product = {
    id: 101,
    name: "Headphones",
    price: 3500
};

product.price = 4000;
console.log(product.price); // Product Price is updated to 4000 from 3500

//////////////////////////////////////////// TASK No 03 ///////////////////////////////////////////////
/* Task 3: Object with Array
Scenario
A student profile contains subjects.
const student = {
name: "Ahmed",
age: 20,
subjects: ["Math", "Physics", "Computer"]
};
Task:
 Log all subjects
 Log the second subject */

const student = {
    name: "Ahmed",
    age: 20,
    subjects: ["Math", "Physics", "Computer"]
};
console.log(student.subjects);
console.log(student.subjects[1]);

//////////////////////////////////////////// TASK No 04 ///////////////////////////////////////////////
/* Task 4: Array of Objects
Scenario
A school stores multiple students’ records.
const students = [
{ name: "Ayesha", marks: 85 },
{ name: "Bilal", marks: 78 },
{ name: "Hina", marks: 92 }
];

Task:
 Log the name of the first student
 Log marks of the last student */

const students = [
    { name: "Ayesha", marks: 85 },
    { name: "Bilal", marks: 78 },
    { name: "Hina", marks: 92 }
];

console.log(students[0].name);
console.log(students[2].marks);

//////////////////////////////////////////// TASK No 05 ///////////////////////////////////////////////
/* Task 5: Nested Object (Real-World Example)
Scenario
User profile data in an application.
const user = {
username: "user123",
profile: {
email: "user@mail.com",
address: {
city: "Karachi",
zip: "75000"
}
}
};
Task:
 Log user’s email
 Log city name */

const user = {
    username: "user123",
    profile: {
        email: "user@mail.com",
        address: {
            city: "Karachi",
            zip: "75000"
        }
    }
};

console.log(user.profile.email);
console.log(user.profile.address.city);

//////////////////////////////////////////// TASK No 06 ///////////////////////////////////////////////
/* Task 6: Modify Nested Object Value
const order = {
orderId: 555,
delivery: {
status: "Pending",
days: 5
}
};
Task:
 Change status to "Delivered"
 Log updated order object */

const order = {
    orderId: 555,
    delivery: {
        status: "Pending",
        days: 5
    }
};

order.delivery.status = "Delivered"; // Status updated to Delivered from Pending
console.log(order.delivery.status);

//////////////////////////////////////////// TASK No 07 ///////////////////////////////////////////////

/* Task 7: Add New Property
const mobile = {
brand: "Samsung",
model: "S21"
};
Task:
 Add a new property price
 Log the complete object */

const mobile = {
    brand: "Samsung",
    model: "S21"
};

mobile.price = "50000"
console.log(mobile);


//////////////////////////////////////////// MINI PROJECT ///////////////////////////////////////////////
/* Create BMI Calculator and Compare Two Person BMI (Mark Miller and John Smith), This time, let's use 
   objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */
//////////////////////////////////////////// MINI PROJECT ///////////////////////////////////////////////

const markBMI = {
    fullName: "Mark Miller",
    weight: 78, // KG
    height: 1.6, // Meter

    calcBMI: function () {
        bmi = this.weight / this.height * this.height;
        return bmi;
    }
}

const johnBMI = {
    fullName: "Mark Miller",
    weight: 92, // KG
    height: 1.95, // Meter

    calcBMI: function () {
        this.bmi = this.weight / this.height * this.height;
        return bmi;
    }
}

console.log();
