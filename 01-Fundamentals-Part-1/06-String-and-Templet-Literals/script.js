// String and Template Literals //
const firstName = "Zaid";
const job = "Web-Developer";
const birthYear = 2002;
const currentYear = 2025;

const myIntro = "I'm " + firstName + ", a " + (currentYear - birthYear) + " Years old " + job + "!";  //Using + to join strings and numbers to make a single string which is called Concatenation.
console.log(myIntro);

//To avoid complex concatenation we use Template String
//Templete String
const zaidIntro = `I'm ${firstName}, a ${currentYear - birthYear} Years old ${job}.`;
console.log(zaidIntro);

//Mutiple Lines String through templet Literal
console.log(`This is 
    multiple line
    string which
    is easily created through templete literal
    without using "\\n".`);

