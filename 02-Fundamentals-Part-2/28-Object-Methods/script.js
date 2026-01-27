//////////////////////////////////////////////////////////////////////////////////////////
/*---------------- OBJECT METHODS – Creating Our Own Methods ----------------*/
//////////////////////////////////////////////////////////////////////////////////////////

// Creating an object with properties and methods
const myIntro = {
  // Basic information
  firstName: "Zaid", // String value
  lastName: "UlHaq", // String value
  birthYear: 2005, // Number value
  designation: "Softwear Engineering Student", // String value
  friends: ["Aizaz", "Habib", "Usman"], // Array value
  hasDriverLicense: true, // Boolean value

  // --------------------------------------------------
  // Function declared as a value inside the object
  // --------------------------------------------------

  /*
    // Method with a custom parameter
    calcAge: function (birthYear) {
        return 2026 - birthYear;
    }
    // ❌ Not ideal because birthYear is already present
    // inside the object, so passing it again is unnecessary
    */

  /*
    // Accessing object property using `this` keyword
    calcAge: function () {
        return 2026 - this.birthYear;

        // This would also work:
        // return 2026 - myIntro.birthYear
        // ❌ But not recommended, because renaming the object
        // would require changes in multiple places
    }
    */

  // Note : **This** keyword is not working in an arraow Function

  // --------------------------------------------------
  // Calculate age once and store it as a new property
  // --------------------------------------------------
  calcAge: function () {
    this.age = 2026 - this.birthYear; // New property created
    return this.age;
  },

  // --------------------------------------------------
  // Method that returns a summary using other properties
  // --------------------------------------------------
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} Years old ${this.designation}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver License.`;
  },
};

// --------------------------------------------------
// Accessing methods
// --------------------------------------------------

// Dot notation
// console.log(myIntro.calcAge(2005));

// Bracket notation (❌ incorrect usage)
// console.log(myIntro["calcAge(2005)"]); // Undefined

/*
👉 Bracket notation does NOT execute code
👉 It only looks up property names as strings

JavaScript searches for:
"calcAge(2005)"

But the object only contains:
"calcAge"

So the result is: undefined
*/

// --------------------------------------------------
// Correct way to use bracket notation
// --------------------------------------------------

// object["methodName"](arguments)
console.log(myIntro["calcAge"]());

/*
✔ This works because:
"calcAge" → valid key
() → function call
*/

// --------------------------------------------------
// Calling calcAge multiple times
// --------------------------------------------------
console.log(myIntro["calcAge"]());
console.log(myIntro["calcAge"]());
console.log(myIntro["calcAge"]());
console.log(myIntro["calcAge"]());

/*
Each function call recalculates the age.
In this example the calculation is simple, so it’s fine.

But for complex calculations, repeatedly recalculating
the same value can hurt performance.

Solution:
✔ Calculate once
✔ Store the result in a property
✔ Reuse it later
*/

// --------------------------------------------------
// Accessing stored age property
// --------------------------------------------------
console.log(myIntro.age);
console.log(myIntro.age);
console.log(myIntro.age);

// --------------------------------------------------
// Challenge Output
// "Zaid is a 25 Years old Softwear Engineering Student,
//  and he has a driver license."
// --------------------------------------------------

// First method
// console.log(myIntro.age); // ❌ Undefined because calcAge was not called yet because age is inside calcAge.

console.log(myIntro.calcAge()); // Call function first
console.log(myIntro.age); // Now age is available

console.log(
  `${myIntro.firstName} is a ${myIntro.age} Years old ${myIntro.designation}, and he has ${
    myIntro.hasDriverLicense ? "a" : "no"
  } driver License.`,
);

// Second method (recommended)
console.log(myIntro.getSummary());
