//=====The Conditional (Ternary) Operators

// Its writing If Else statement in short code 
const age = 18;
if (age >= 18) {
    console.log("I am allowed to use Mobile Phone📱");
} else {
    console.log("I am not allowed to use phone📵");
}
// We can write like this using ternary Operator
age >= 18 ? console.log("I am allowed to use Mobile Phone📱") : console.log("I am not allowed to use phone📵");



if (age >= 18) {
    const ageStatus = "Adult";
} else {
    const ageStatus = "Teenager";
}
//Instaed of this we can write like this using ternary operator
ageStatus = age >= 18 ? "Adult" : "Teenager";
//This is Expression because it produce value
console.log(ageStatus);


// As we know that ternary operator is a Expression, so we can write this into Templete Literals
console.log(`I am Zaid and I am ${age >= 18 ? "Adult" : "Teenager"}`);

// Note: Ternary can not replace if else statement. We can use if else statement when there is mutliple decision. We can Use ternary operator for a quick and simple decision.

