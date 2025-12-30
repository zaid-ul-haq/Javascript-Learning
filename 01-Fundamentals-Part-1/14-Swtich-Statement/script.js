// Switch Statement
const day = "Wednesday";

switch (day) {
    case "Monday": //day === "Monday"
        console.log("Today is Monday");
        break; // If the condition is true so stop here
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Today is Weekend");
        break;
    default:
        console.log("Not a Valid Day!"); // Deafult: If any condition is not true execute the default code
}

// Challenge : Doing the same with If Else Code
if (day === "Monday") {
    console.log(`Today is ${day}`);
} else if (day === "Tuesday") {
    console.log(`Today is ${day}`);
} else if (day === "Wednesday") {
    console.log(`Today is ${day}`);
} else if (day === "Thursday") {
    console.log(`Today is ${day}`);
} else if (day === "Friday") {
    console.log(`Today is ${day}`);
} else if (day === "Saturday" || day === "Sunday") {
    console.log(`Today is Weekend`);
} else {
    console.log(`Not a valid day!`);
}
