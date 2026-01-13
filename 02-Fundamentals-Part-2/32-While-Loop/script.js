///////////////////////////////////////////////////////////////////////////////////////////
/*---------------------------------- WHILE LOOP ----------------------------------*/
/////////////////////////////////////////////////////////////////////////////////////////
/* What is a While Loop ?
A while loop repeats code as long as a condition is true. Unlike a for loop where you know exactly how many times to loop, a while loop continues until something changes.Real-world analogy:

For loop: "Do 10 push-ups" (you know the exact number)
While loop: "Keep eating until you're full" (you don't know exactly how many bites) */

// For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log("Push-up Number : ", i);
// }

// Lets do the same through While Loop
let i = 1;
while (i <= 10) {
    console.log("Push-up Number : ", i);
    i++ // Upadte Condition : Don't forget to update the condition!
}
// This will check first the <Condition> then will execute the code and then update the condition,
// The code will executing until the condition is true
// Important: You MUST change the condition inside the loop, or it will run forever! ⚠️

/* How it works:

Check: Is i <= 10? → Yes (i is 1)
Execute code: Print 1
Update: i++ makes i = 2
Check again: Is i <= 10? → Yes (i is 2)
Repeat until i becomes 10
Check: Is 11 <= 10? → No, STOP */

// Example: Keep Asking Until Correct Answer
let passwoed = "";

while (passwoed !== "1234") {
    passwoed = prompt("Enter your Password Here : ")
    if (passwoed !== "1234") {
        console.log("Wrong Password! Try again.");

    }
}
console.log("Access Granted ✅");

