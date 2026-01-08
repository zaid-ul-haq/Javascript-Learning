//////////////////////////////////////////////////////////////////////////////////////////
/*--------------------------- INTRODUCTION TO JAVASCRIPT OBJECT --------------------------*/
//////////////////////////////////////////////////////////////////////////////////////////

/*------------------------- What is an Object? -------------------------*/
// An object is a container used to store related data together.
// It stores data in the form of key–value pairs.
// 👉 Object: Uses named keys (properties)
// 👉 Array: Uses index numbers (ordered list)

/*------------------------- How to Create an Object -------------------------*/
const myIntro = {
    firstName: "Zaid",
    lastName: "UlHaq",
    age: 2026 - 2005, // Calculating age dynamically
    designation: "Softwear Engineering Student",
    friends: ["Aizaz", "Habib", "Ali"] // Array inside an object
}

/* Explanation:
Keys        → firstName, lastName, age, designation, friends
Values      → "Zaid", "UlHaq", 21, "Softwear Engineering Student", ["Aizaz", "Habib", "Ali"]
*/

console.log(myIntro);

/*------------------------- How to Access Object Properties -------------------------*/
/*
There are two ways to retrieve values from an object:
1️⃣ Dot Notation
2️⃣ Bracket Notation
*/

// Dot Notation (used when property name is fixed)
console.log(myIntro.lastName);

// Bracket Notation (used when property name is dynamic or computed)
console.log(myIntro["firstName"]);

// In bracket notation, the key must be written as a string
// You can also use expressions inside brackets
console.log(myIntro["first" + "Name"]);

const nameKey = "Name";
console.log(myIntro["first" + nameKey]);
console.log(myIntro["last" + nameKey]);

// ❌ This will not work because dot notation does not support expressions
// console.log(myIntro."first"+nameKey);

/*
Important Notes:
✔ Use Dot Notation when you know the property name beforehand
✔ Use Bracket Notation when the property name is stored in a variable
*/

/*
Example with user input:
The user enters a property name, and we retrieve its value dynamically
*/

const interestIn = prompt("What do you want to know about me? Choose between firstName, lastName, age, designation.")

// ❌ This will return undefined because "interestIn" is not a property name
// console.log(myIntro.interestIn);

// ✔ Correct way using bracket notation
console.log(myIntro[interestIn]);

/*
Validation using if–else:
If the entered property exists, show the value
Otherwise, show an error message
*/

if (myIntro[interestIn]) {
    console.log(myIntro[interestIn]);
} else {
    console.log("Wrong Request! Choose between firstName, lastName, age, designation.")
}

/*------------------------- Adding New Properties to an Object -------------------------*/
// New properties can be added after object creation

myIntro.location = "Peshawar, Pakistan"; // Using dot notation
myIntro["instaID"] = "@zaidulhaq2k05";   // Using bracket notation

console.log(myIntro);

/*------------------------- Challenge -------------------------*/
/*
Create the following sentence using object data:
"Zaid has 3 friends, and his best friend is called Aizaz"

Requirements:
✔ Extract name from object
✔ Count total friends using array length
✔ Access first friend from array
*/

console.log(`${myIntro.firstName} has ${myIntro.friends.length} friends, and his best friend is called ${myIntro.friends[0]}`);
