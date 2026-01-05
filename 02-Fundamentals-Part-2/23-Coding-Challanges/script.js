/////////////////////////////////////////////////////////////////////////////////////////

// Task 01
// Write a function square(num) that returns the square of a number
const calcSqaure = function (num) {
    const square = num * num;
    return square;
}
console.log(calcSqaure(8));

/////////////////////////////////////////////////////////////////////////////////////////

// Task 02
// Create a function isEven(num) that returns true if the number is even, otherwise false
const isTrue = function (numb) {
    if (numb % 2 === 0) {
        console.log(`${numb} : is Even Number`);
        return true;
    } else {
        console.log(`${numb} : is Odd Number`);
        return false;
    }
}
console.log(isTrue(10));
console.log(isTrue(11));

/////////////////////////////////////////////////////////////////////////////////////////

// Task 03
// Write a function max(a, b) that returns the larger number
const max = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is Larger number`);
        return num1;
    }
    else if (num1 < num2) {
        console.log(`${num2} is Larger number`);
        return num2;
    } else {
        console.log("both numbers are equal to each other");
        return -1
    }
}

console.log(max(8, 6));

/////////////////////////////////////////////////////////////////////////////////////////

// Task 04
// Write a function grade(score):
// 90 + → "A"
// 80–89 → "B"
// 70–79 → "C"
// else → "Fail"

const grade = function (score) {
    if (score >= 90) {
        console.log(`Your grade is A+`);
        return score;
    } else if (score >= 80 && score < 90) {
        console.log(`Your grade is B`);
        return score;
    } else if (score >= 70 && score < 80) {
        console.log(`Your grade is C`);
        return score;
    } else {
        console.log(`Fail`);
        return score;
    }
}

console.log(grade(69));

/////////////////////////////////////////////////////////////////////////////////////////

// Task 05
//Write a function printNumbers(n) that prints numbers from 1 to n
const printNumbers = function (n) {
    let number = 0
    while (number <= n) {
        console.log(number);
        number++;
    }
}
printNumbers(10);


/////////////////////////////////////////////////////////////////////////////////////////
// ------------------------ Coding Challenge | Function Project ------------------------
/////////////////////////////////////////////////////////////////////////////////////////

/* The two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team). 
A team only wins if it has atleast double the average score of the other team. 
Otherwise, no team wins!

Your tasks: 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)" 
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2 
5. Ignore draws this time 

Test data: 
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
*/

// Function for Calculating Average
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Function for Checking Winner
const checkWinner = (teamOneAverage, teamTwoAverage) => {
    if (teamOneAverage >= 2 * teamTwoAverage) {
        console.log(`Dolhpins Team Win (${teamOneAverage} vs. ${2 * teamTwoAverage})`);
    } else if (teamTwoAverage >= 2 * teamOneAverage) {
        console.log(`Koalas Team Win (${teamTwoAverage} vs. ${2 * teamOneAverage})`);
    } else {
        console.log("No Teams Win...");
    }
}

// Test Data 01
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

// Printing Both Team Average
console.log(avgDolphins, avgKoalas);
// Calling Winner Function
checkWinner(avgDolphins, avgKoalas);

// Test Data 02
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

// Printing Both Team Average
console.log(avgDolphins, avgKoalas);
// Calling Winner Function
checkWinner(avgDolphins, avgKoalas);