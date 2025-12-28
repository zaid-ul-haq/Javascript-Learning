//======== Equality Operators ============
//  == vs ===
const age = "18";

if (age == 18) {
    console.log("You just become an adult.");
}
// (==) this is loos equality, on this coercion type applied
if (age === 18) {
    console.log("You just become an adult.");
}
// (===) This is Strict Equality, in this the data type can not be converted automatically
// === is good practice to use always


// Prompt Function: This function will take input from user in browser
// const favorite = prompt("Enter your favorite number:");
const favorite = Number(prompt("Enter your favorite number:")); //Now anything user will input will be stored in Number Data Type
console.log(favorite, typeof (favorite));
// User Input will always be in string

if (favorite === 23) { //"23" == 23
    console.log("Cool! 23 is an amazing result");
} else if (favorite === 22) {
    console.log("Cool! 22 is also cool result");
} else {
    console.log("Oh! This is not availabe with us.");
}

//======== Not Equal Operators ============
// != (Loose Version)
// !== (Strict Version)

if (favorite !== 23) {
    console.log("Good this number is not equal to 23");
} else {
    console.log("Oh! this number is equal to 23");
}