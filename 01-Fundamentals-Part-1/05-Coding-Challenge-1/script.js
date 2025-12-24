///////////////////////////////////
/* 
Coding Challenge #1 

Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 

Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John. 

Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. 
*/

// Declaring Variables
let mass, height;
let marksWeights, marksHeights;
let jhonWeights, jhonHeights
let marksHigherBMI;
let BMI


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
marksHigherBMI = marksBMI > JhonBMI;
console.log("Marks has higher BMI than Jhon: ", marksHigherBMI);


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
marksHigherBMI = marksBMI > JhonBMI;
console.log("Marks has higher BMI than Jhon: ", marksHigherBMI);