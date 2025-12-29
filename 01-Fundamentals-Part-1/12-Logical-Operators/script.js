//Boolean Logic
//============ AND OPERATORS ============//
// Result will be true If all are trues
// console.log(true && true); // True
// console.log(false && true); // False
// console.log(true && false); // False
// console.log(false && false); // False


let hasDriverLicence = true;
let hasGoodVision = true;

if (hasDriverLicence && hasGoodVision) {
    console.log("Sara has able to drive.");
} else {
    console.log("Sara has not able to drive.");
}


if (5 > 3 && 5 > 10) {
    console.log("Final Condition is True");
} else {
    console.log("Final Condition is False");
}

//============ OR OPERATORS ============//
// Result will be true If any one of the value is true
// console.log(true || true); // True
// console.log(false || true); // True
// console.log(true || false); // True
// console.log(false || false); // False
if (5 > 3 || 5 > 10) {
    console.log("Final Condition is True");
} else {
    console.log("Final Condition is False");
}

//============ NOT OPERATORS ============//
// This will invert the True value into False and False into True
// console.log(!true); // False
// console.log(!false); // True

if (!hasDriverLicence) {
    console.log("Final Condition is True");
} else {
    console.log("Final Condition is False");
}



