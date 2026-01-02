// Arrow Function

//Syantax
// variable name = Parameter => (Return or Console Code)

//Function Define
const calculateAge = ageFinder => 2026 - ageFinder;

//Calling Function, giving Parameter and Consling
console.log(calculateAge(2002));

//Task: Calculate that how many years left for retirement?
const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2026 - birthyear; // Calculate age first
    const retirementt = 50 - age; // Calculate retirement 
    // return retirementt;
    return `${firstName} will be retire in ${retirementt} Years.`
}

// Calling Functions and Console it on screen 
console.log(yearsUntilRetirement(2002, "Zaid"));
console.log(yearsUntilRetirement(2005, "Jonas"));



