///////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------- Nesting Object -----------------------------------*/
//////////////////////////////////////////////////////////////////////////////////////////
// Deep Nesting Object
const university = {
  name: "Virtual University",
  location: "Pakistan",
  departments: {
    computerScience: {
      name: "Computer Science",
      head: {
        name: "Dr. Nouman",
        qualification: {
          degree: "PHD",
          university: "MIT",
          year: 2005,
        },
      },
      courses: ["CS101", "CS202", "MTH101"],
    },
    softwearEngineering: {
      name: "Softwear Engineering",
      head: {
        name: "Dr. Imran",
        qualification: {
          degree: "PHD",
          university: "Harvard",
          year: 2010,
        },
      },
      courses: ["CS101", "SE101", "MTH101"],
    },
  },
};

// Accessing deeply nested data
console.log(university.name);
console.log(university.departments.computerScience.head.name);
console.log(university.departments.softwearEngineering.head.name);
console.log(university.departments.softwearEngineering.head.name);

// Arrays of Objects
const students = [
  {
    id: 1,
    name: "Alice",
    grade: 85,
    subject: ["Maths", "Physics", "English"],
  },
  {
    id: 2,
    name: "Smith",
    grade: 89,
    subject: ["Maths", "CS", "English"],
  },
  {
    id: 3,
    name: "Bob",
    grade: 92,
    subject: ["CS", "Stats", "English"],
  },
];

// Accessing
console.log(students[0].name);
console.log(students[1].grade);
console.log(students[2].subject);
console.log(students[0].subject[0]);

console.log(students[1].name);
console.log(students[2].grade);
console.log(students[1].subject);
console.log(students[0].subject[0]);
