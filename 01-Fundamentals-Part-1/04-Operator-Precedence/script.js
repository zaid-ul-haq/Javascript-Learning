////////////////////////////////////
// Operator Precedence
const current = 2037;

const ageZaid = current - 1991;
const ageNayab = current - 2018;

console.log(current - 1991 > current - 2018);
// First the maths calculation will occur then comparison
// Maths has high precedence that comparison

let x, y;
x = y = 10;  //start from right to left

let avagAge = ageZaid + ageNayab / 2
console.log(avagAge);

let avgAge = (ageZaid + ageNayab) / 2
console.log(avgAge);
//Both have different result
//Because in first ageNayab / 2 get result then result + ageZaid
//In second first (ageZaid + ageNayab) then result / 2
//Grouping () have highest Precedence

