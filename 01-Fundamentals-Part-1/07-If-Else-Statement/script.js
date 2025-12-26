// IF ELSE STATEMENT - DECESION TAKING 

//Check condition for Driving Licence
const saraAge = 20;
if (saraAge >= 19) {
    console.log("You're eligable for Driving Licence"); //If condition is True, this code will be executed
}
else {
    console.log(`You're too young, for driving licence eligabilty you should be atleast 
        19 Years Old. Wait another ${18 - saraAge} Years.`); //If condition is False, then  this code will be executed
}

//Check condition for Driving Licence
const zaidAge = 15;
if (zaidAge >= 19) {
    console.log("You're eligable for Driving Licence🚗");
}
else {
    console.log(`You're too young, for driving licence eligabilty you should be atleast 19 Years Old. Wait another ${18 - zaidAge} Years.`);
}

//Check condition for a person that is born in 20th or 21st Century
const bornYear = 1998;
let Century;

if (bornYear <= 2000) {
    Century = 20;
}
else {
    Century = 21;
}

console.log(Century);
