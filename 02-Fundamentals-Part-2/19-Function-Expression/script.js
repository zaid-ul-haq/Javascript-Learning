// Function Declaration
// In Function declaration we can call function before defined

// Calling Function
const age1 = calcAge(2002);

// Defining Function
function calcAge(birthYear) {
    const age = 2026 - birthYear;
    return age;
}


// Function Expression
// Function Expression mean to store the function in a vriable directly and we can not call it before defining like we did in Function Declaration.
// Function is a just Value, not a datatype, which we can store in a variable
const age = function (birthYear) {
    return 2026 - birthYear;
}

// Calling Expression Function
const age2 = age(2005);

//Printing age1 and age2
console.log(age1, age2);



