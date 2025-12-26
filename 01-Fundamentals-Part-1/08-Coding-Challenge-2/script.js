///////////////////////////////////
/* 
Coding Challenge #2 

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 

Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 

Hint: Use an if/else statement 
*/

// Declaring Variables
let mass, height;
let marksWeights, marksHeights;
let jhonWeights, jhonHeights;
let BMI;


//--------Test Data 01-----------//
console.log("-----Data 01-----");
// Marks Data 
marksWeights = mass = 78;
marksHeights = height = 1.69;
BMI = mass / (height * height);
marksBMI = BMI;
console.log("Marks BMI = ", marksBMI);

// Jhon Data 
jhonWeights = mass = 92;
jhonHeights = height = 1.95;
BMI = mass / (height * height);
JhonBMI = BMI;
console.log("Jhon BMI = ", JhonBMI);

//Check Mark Has Higher BMI than Jhon
if (marksBMI > JhonBMI) {
    console.log(`Mark's BMI (${marksBMI}) is Higher than Jhon's BMI (${JhonBMI})`);
}
else {
    console.log(`Jhon's BMI (${JhonBMI}) is Higher than Mark's BMI (${marksBMI})`);
}



//--------Test Data 02-----------//
console.log("-----Data 02-----");
// Marks Data 
marksWeights = mass = 95;
marksHeights = height = 1.88;
BMI = mass / (height * height);
marksBMI = BMI;
console.log("Marks BMI = ", marksBMI);

// Jhon Data 
jhonWeights = mass = 85;
jhonHeights = height = 1.76;
BMI = mass / (height * height);
JhonBMI = BMI;
console.log("Jhon BMI = ", JhonBMI);

//Check Mark Has Higher BMI than Jhon
if (marksBMI > JhonBMI) {
    console.log(`Mark's BMI (${marksBMI}) is Higher than Jhon's BMI (${JhonBMI})`);
}
else {
    console.log(`Jhon's BMI (${JhonBMI}) is Higher than Mark's BMI (${marksBMI})`);
}