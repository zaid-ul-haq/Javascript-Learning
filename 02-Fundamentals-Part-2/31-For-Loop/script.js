///////////////////////////////////////////////////////////////////////////////////////////
/*---------------------------------- LOOPS - FOR LOOP ----------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////
/* What is a For Loop?
   A for loop repeats a block of code a specific number of times.It's one of the most commonly used loops in programming. */

/* Basic For Loop Syntax
for (initialization; condition; increment/decrement) {
  // Code to execute in each iteration
} */

// Example : 01 : Print "Lefting weight repetition 10" - number should be increment 
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lefting weight repetition ${rep}`);
}

/* Parts of a for loop:

1- Initialization: Runs once at the start (usually sets a counter variable)
2- Condition: Checked before each iteration (loop continues while true)
3- Increment/Decrement: Runs after each iteration (updates the counter)
4- Body: Code inside {} that executes each time */


// Example : 02
// Count from 1 to 10
for (let number = 1; number <= 10; number++) {
    console.log(`Number : ${number}`);
}

// Example : 03
// Count Backwards
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Working with Arrays
// Example 04: Loop Through Array
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"]
for (let index = 0; index < fruits.length; index++) {
    // console.log(fruits[index]);
    console.log("Fruit : ", (index + 1), " ", fruits[index]);
}

// Example 05: Sum of Array Elements
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let num = 0; num < numbers.length; num++) {
    sum = sum + numbers[num];
}
console.log("Total sum", sum);

//Example 06: Find Maximum Value
const score = [10, 12, 13, 67, 9, 19, 68]
max = score[0];

for (let x = 0; x < score.length; x++) {
    if (score[x] > max) {
        max = score[x];
    }
}
console.log(`The maximum number from array is : ${max}`);

// Example 05: Filter Array (Find Even Numbers)
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const evenArray = [];

for (let counter = 0; counter < numberArray.length; counter++) {
    if (numberArray[counter] % 2 == 0) {

        // Filling Empty Array
        evenArray.push(numberArray[counter]);
    }
}
console.log(`The Even numbers are : ${evenArray}`);

// Example : 06 : Age Calculate from given birth years 
const birthYears = [1990, 1991, 1998, 2000, 2002, 2005];
const ages = [];
for (let start = 0; start < birthYears.length; start++) {
    ages.push(2026 - birthYears[start]);
}
console.log(`Ages : ${ages}`);




// Nested For Loops
// Example 07: Multiplication Table
for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 10; b++) {
        console.log(`${a}x${b} = ${a * b}`);
    }
    console.log("----------------------------------------"); // Seprater
}


// Continue and Break Keywords
// From the Given array, print only string and skip other datatypes

console.log('-------------- Printing Olny String --------------');

const myIntro = ["Zaid", "UlHaq", 21, "BSCS", 2.99, "Pakistan"]
for (let e = 0; e < myIntro.length; e++) {
    if (typeof myIntro[e] !== "string") continue;
    console.log(myIntro[e], typeof myIntro[e]);
}

// Continue : if something Similier found (True Condition) then skip below code block once....
// Break : If something Similier found (True Condition), then terminate the whole loop...

console.log('-------------- Break If 10 or 20 Found --------------');

const numberList = [1, 2, 3, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 20, 21, 22, 23, 29]
for (let j = 0; j < numberList.length; j++) {
    if (numberList[j] === 10 || numberList[j] === 20) break;
    console.log("Number : ", numberList[j]);
}  
